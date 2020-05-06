//
//  SbenViewController.m
//  ctb
//
//  Created by yueming on 2020/3/29.
//  Copyright © 2020 yueming. All rights reserved.
//

#import "SbenViewController.h"
#import "SbenTableCell.h"
#import "SbenCellModel.h"
#import "SbenUploadImgController.h"

#import "GlobalDefines.h"
#import "AppDelegate.h"
#import "NetworkSingleton.h"
#import "MJRefresh.h"
#import "MJExtension.h"

#import <MobileCoreServices/MobileCoreServices.h>
#import <AVFoundation/AVFoundation.h>

@interface SbenViewController ()<UIScrollViewDelegate,UITableViewDataSource,UITableViewDelegate,UIGestureRecognizerDelegate>
{    
    NSMutableArray *_myCtbArray;//myctb
    
    NSData *_imageData;
    
    
    NSMutableArray *_MerchantArray;
    NSString *_locationInfoStr;
    NSInteger _KindID;//分类查询ID，默认-1
    
    NSInteger _offset;
    
    
    UIView *_maskView;
}

//video api
-(void) switchMOVtoMP:(NSURL *)inputURL;
+(NSString*)getCurrentTimes;
-(void)deleteVideo:(NSString *)path;
- (void)convertVideoToLowQuailtyWithInputURL:(NSURL*)inputURL
                                   outputURL:(NSURL*)outputURL;

@end

@implementation SbenViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.navigationController.navigationBarHidden = YES;
    self.view.backgroundColor = [UIColor whiteColor];
    self.navigationController.interactivePopGestureRecognizer.delegate = nil;
    
    [self initData];
    [self setNav];
    [self setClassTabs];
    [self setUpTableView];
    [self setVideoBtn];
}

- (void)setVideoBtn {
    UIButton *btn=[UIButton new];
    [btn setTitle:@"record video" forState:UIControlStateNormal];
    [btn setBackgroundColor:UIColor.redColor];

    [btn setTitleColor:UIColor.whiteColor forState:UIControlStateNormal];
    btn.translatesAutoresizingMaskIntoConstraints=false;
    [self.view addSubview:btn];
    
    [self.view addConstraint:[NSLayoutConstraint constraintWithItem:btn attribute:NSLayoutAttributeCenterX relatedBy:NSLayoutRelationEqual toItem:self.view attribute:NSLayoutAttributeCenterX multiplier:1 constant:0]];
    [self.view addConstraint:[NSLayoutConstraint constraintWithItem:btn attribute:NSLayoutAttributeCenterY relatedBy:NSLayoutRelationEqual toItem:self.view attribute:NSLayoutAttributeCenterY multiplier:1 constant:0]];
    [self.view addConstraint:[NSLayoutConstraint constraintWithItem:btn attribute:NSLayoutAttributeWidth relatedBy:NSLayoutRelationEqual toItem:nil attribute:NSLayoutAttributeNotAnAttribute multiplier:1 constant:146]];
    [self.view addConstraint:[NSLayoutConstraint constraintWithItem:btn attribute:NSLayoutAttributeHeight relatedBy:NSLayoutRelationEqual toItem:nil attribute:NSLayoutAttributeNotAnAttribute multiplier:1 constant:46]];
    [btn addTarget:nil action:@selector(btnclick4Photo) forControlEvents:UIControlEventTouchUpInside];
    
}
//录像
-(void)btnclick4Video
{
    bool canUse= [self isCameraAvailable];
    if(canUse)
    {
        _camera=[[UIImagePickerController alloc]init];
        self.camera.sourceType=UIImagePickerControllerSourceTypeCamera;
        self.camera.showsCameraControls=true;
        self.camera.mediaTypes=@[(NSString *)kUTTypeMovie];//typemovie with voice
        self.camera.allowsEditing=true;
      
        /*
         设置视频长度
         */
        self.camera.videoMaximumDuration=60;//seconds
     
        /*
         设置视频质量
         UIImagePickerControllerQualityTypeHigh = 0,       // highest quality
         UIImagePickerControllerQualityTypeMedium = 1,     // medium quality, suitable for transmission via Wi-Fi
         UIImagePickerControllerQualityTypeLow = 2,         // lowest quality, suitable for tranmission via cellular network
         UIImagePickerControllerQualityType640x480 NS_ENUM_AVAILABLE_IOS(4_0) = 3,    // VGA quality
         UIImagePickerControllerQualityTypeIFrame1280x720 NS_ENUM_AVAILABLE_IOS(5_0) = 4,
         UIImagePickerControllerQualityTypeIFrame960x540 NS_ENUM_AVAILABLE_IOS(5_0) = 5,
         */
        
        self.camera.videoQuality= UIImagePickerControllerQualityType640x480;
        
        
        
//        CGFloat camScaleup=1.8;
//        self.camera.cameraViewTransform=CGAffineTransformScale(self.camera.cameraViewTransform, camScaleup, camScaleup);
        
        self.camera.delegate=self;
        self.view.backgroundColor=UIColor.lightGrayColor;
        
        if(self.navigationController)
        {
            NSLog(@"have navigation");
            [self.navigationController presentViewController:self.camera animated:true completion:^(){}];
        }
        else{
            NSLog(@"no navigation");
            [self presentViewController:self.camera animated:true completion:nil];
        }
    }else{
        NSLog(@"can not use camera");
        
        
    }
    
}
//拍照
-(void)btnclick4Photo
{
    bool canUse= [self isCameraAvailable];
    if(canUse)
    {
        _camera=[[UIImagePickerController alloc]init];
        self.camera.sourceType=UIImagePickerControllerSourceTypeCamera;
        self.camera.allowsEditing=true;
        
        self.camera.delegate=self;
        self.view.backgroundColor=UIColor.lightGrayColor;
        
        if(self.navigationController)
        {
            NSLog(@"have navigation");
            [self.navigationController presentViewController:self.camera animated:true completion:^(){}];
        }
        else{
            NSLog(@"no navigation");
            [self presentViewController:self.camera animated:true completion:nil];
        }
    }else{
        NSLog(@"can not use camera");
    }
    
}

- (BOOL) isCameraAvailable{
    return [UIImagePickerController isSourceTypeAvailable:UIImagePickerControllerSourceTypeCamera];
}

//delegate
-(void)imagePickerControllerDidCancel:(UIImagePickerController *)picker
{
    [picker dismissViewControllerAnimated:true completion:nil];
}
//得到图片或者视频后, 调用该代理方法
-(void)imagePickerController:(UIImagePickerController *)picker didFinishPickingMediaWithInfo:(NSDictionary<UIImagePickerControllerInfoKey,id> *)info
{
    [picker dismissViewControllerAnimated:true completion:nil];
    
    // UIImagePickerControllerOriginalImage 原始图片
    // UIImagePickerControllerEditedImage 编辑后图片
    UIImage *image = [info objectForKey:UIImagePickerControllerOriginalImage];
    _imageData = UIImageJPEGRepresentation(image, 0.1);
    
    [self upLoad:image];
    
    NSLog(@"============image=%@",image);
    
    //获取存放的照片
    //获取Documents文件夹目录
//    NSArray *path = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
//    NSString *documentPath = [path objectAtIndex:0];
    //指定新建文件夹路径
//    NSString *imageDocPath = [documentPath stringByAppendingPathComponent:@"PhotoFile"];
    
    

//    [picker dismissViewControllerAnimated:true completion:nil];
    
    
    
    
//    NSString *urlStr =[NSString stringWithFormat:@"%@", [info objectForKey:UIImagePickerControllerMediaURL]];
//
//
//    NSString *documentsDirPath =[NSSearchPathForDirectoriesInDomains(NSDocumentDirectory,NSUserDomainMask,YES) firstObject];
//    NSURL *documentsDirUrl = [NSURL fileURLWithPath:documentsDirPath isDirectory:YES];
//
//    NSString *temp=[SbenViewController getCurrentTimes];
//    NSString *outputName=[temp stringByAppendingString:@".mp4"];
//    NSURL *saveMovieFile = [NSURL URLWithString:outputName relativeToURL:documentsDirUrl];
//
//    NSLog(@"urlStr=%@, outputName=%@, saveMovieFile=%@",urlStr,outputName, saveMovieFile);
//    NSLog(@"documentsDirPath=%@, documentsDirUrl=%@",documentsDirPath,documentsDirUrl);
    
    //格式转换
//    [self convertVideoToLowQuailtyWithInputURL:[[NSURL alloc]initWithString:urlStr] outputURL:saveMovieFile];
}
//上传图片到web服务器
- (void)upLoad:(UIImage*) image
{

    //1.创建管理者对象
    AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];
    //接收类型不一致请替换一致text/html或别的
    manager.responseSerializer.acceptableContentTypes = [NSSet setWithObjects:@"application/json",
                                                             @"text/html",
                                                             @"image/jpeg",
                                                             @"image/png",
                                                             @"application/octet-stream",
                                                             @"text/json",
                                                             nil];
    
    //2.上传文件,在这里我们还要求传别的参数，用字典保存一下，不需要的童鞋可以省略此步骤
//    NSDictionary *dict = [[NSDictionary alloc] initWithObjectsAndKeys:_fireID,@"id",_longitude,@"longitude",_latitude,@"latitude", nil];
    
    
    //ur: 你的后台给你url，有其他需要拼接的参数可以在这里拼接，图片文件不用管
    NSString *urlString = @"http://30.117.104.5:8080/myctb/fuci/fu";
//    NSString *urlString = @"http://192.168.0.100:8080/myctb/fuci/fu";
    
    NSMutableDictionary *params = [NSMutableDictionary dictionary];
    params[@"zc"] = @"xxx";//[headiconURL stringByAppendingString:@".jpg"];

    [manager POST:urlString parameters:params constructingBodyWithBlock:^(id<AFMultipartFormData> formData) {
        // 在网络开发中，上传文件时，是文件不允许被覆盖，文件重名
         // 要解决此问题，
         // 可以在上传时使用当前的系统事件作为文件名
             NSDateFormatter *formatter = [[NSDateFormatter alloc] init];
         // 设置时间格式
             formatter.dateFormat            = @"yyyyMMddHHmmss";
             NSString *str                         = [formatter stringFromDate:[NSDate date]];
             NSString *fileName               = [NSString stringWithFormat:@"%@.png", str];
        
NSLog(@"filename：%@",fileName);
              /*
              此方法参数
                  1. 要上传的[二进制数据]
                  2. 我这里的imgFile是对应后台给你url里面的图片参数，别瞎带。
                  3. 要保存在服务器上的[文件名]
                  4. 上传文件的[mimeType]
             */
             [formData appendPartWithFileData:_imageData name:@"fileName" fileName:fileName mimeType:@"image/png"];
    } success:^(NSURLSessionDataTask *task, id responseObject) {
        NSLog(@"请求成功：%@",responseObject);
        
        SbenUploadImgController *suiVC = [SbenUploadImgController new];
        suiVC.image = image;
        [self presentViewController:suiVC animated:YES completion:nil];
        //        [self.navigationController pushViewController:suiVC animated:YES];
    } failure:^(NSURLSessionDataTask *task, NSError *error) {
        NSLog(@"请求失败：%@",error);
        
        SbenUploadImgController *suiVC = [SbenUploadImgController new];
        suiVC.image = image;
        [self presentViewController:suiVC animated:YES completion:nil];
//        [self.navigationController pushViewController:suiVC animated:YES];
    }];

  //post请求
//    [manager POST:urlString parameters:params constructingBodyWithBlock:^(id<AFMultipartFormData>  _Nonnull formData) {
//
//    // 在网络开发中，上传文件时，是文件不允许被覆盖，文件重名
//    // 要解决此问题，
//    // 可以在上传时使用当前的系统事件作为文件名
//        NSDateFormatter *formatter = [[NSDateFormatter alloc] init];
//    // 设置时间格式
//        formatter.dateFormat            = @"yyyyMMddHHmmss";
//        NSString *str                         = [formatter stringFromDate:[NSDate date]];
//        NSString *fileName               = [NSString stringWithFormat:@"%@.png", str];
//
//
//         /*
//         此方法参数
//             1. 要上传的[二进制数据]
//             2. 我这里的imgFile是对应后台给你url里面的图片参数，别瞎带。
//             3. 要保存在服务器上的[文件名]
//             4. 上传文件的[mimeType]
//        */
//        [formData appendPartWithFileData:_imageData name:@"imgFile" fileName:fileName mimeType:@"image/png"];
//
//
//
//    } progress:^(NSProgress * _Nonnull uploadProgress) {
//
//        //打印下上传进度
//        NSLog(@"%lf",1.0 *uploadProgress.completedUnitCount / uploadProgress.totalUnitCount);
//    } success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
//
//        //请求成功
//        NSLog(@"请求成功：%@",responseObject);
//
//    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
//
//        //请求失败
//        NSLog(@"请求失败：%@",error);
//    }];
}

//-(void) switchMOVtoMP:(NSString *)inputStr
-(void) switchMOVtoMP:(NSURL *)inputUrl
{
//    NSURL *inputUrl = [[NSURL alloc]initWithString:inputStr];
    NSLog(@"mov转mp4 ==》%@",inputUrl);
    
    AVURLAsset *avAsset = [AVURLAsset URLAssetWithURL:inputUrl options:nil];
    AVAssetExportSession *exportSession = [[AVAssetExportSession alloc] initWithAsset:avAsset presetName:AVAssetExportPresetMediumQuality];

    NSString *documentsDirPath =[NSSearchPathForDirectoriesInDomains(NSDocumentDirectory,NSUserDomainMask,YES) firstObject];
    NSURL *documentsDirUrl = [NSURL fileURLWithPath:documentsDirPath isDirectory:YES];

    NSString *temp=[SbenViewController getCurrentTimes];
    NSString *outputName=[temp stringByAppendingString:@".mp4"];

    NSURL *saveMovieFile = [NSURL URLWithString:outputName relativeToURL:documentsDirUrl];
    exportSession.outputURL =saveMovieFile;
    exportSession.outputFileType =AVFileTypeMPEG4;
    exportSession.shouldOptimizeForNetworkUse= YES;
    [exportSession exportAsynchronouslyWithCompletionHandler:^(){
        int exportStatus = exportSession.status;
        switch (exportStatus) {
            case AVAssetExportSessionStatusFailed: {
                    NSError *exportError = exportSession.error;
                    NSLog (@"AVAssetExportSessionStatusFailed: %@", exportError);
                    break;
                    }
                case AVAssetExportSessionStatusCompleted: {
                NSLog(@"视频转码成功");
                }
                
        }
   
    }];
    
}
+(NSString*)getCurrentTimes{
   
    NSDateFormatter *formatter = [[NSDateFormatter alloc] init];
    // ----------设置你想要的格式,hh与HH的区别:分别表示12小时制,24小时制
    [formatter setDateFormat:@"YYYY-MM-dd HH:mm:ss"];
    //现在时间,你可以输出来看下是什么格式
    NSDate *datenow = [NSDate date];
    
    NSString *currentTimeString = [formatter stringFromDate:datenow];

    currentTimeString=[currentTimeString stringByReplacingOccurrencesOfString:@"-"withString:@""];
    currentTimeString=[currentTimeString stringByReplacingOccurrencesOfString:@" "withString:@""];
    currentTimeString=[currentTimeString stringByReplacingOccurrencesOfString:@":"withString:@""];
    return currentTimeString;
    
}
-(void)deleteVideo:(NSString *)path;
{
    
}
- (void)convertVideoToLowQuailtyWithInputURL:(NSURL*)inputURL
                                   outputURL:(NSURL*)outputURL
{
    
    //setup video writer
    AVAsset *videoAsset = [[AVURLAsset alloc] initWithURL:inputURL options:nil];
    
    AVAssetTrack *videoTrack = [[videoAsset tracksWithMediaType:AVMediaTypeVideo] objectAtIndex:0];
   
    CGSize videoSize = videoTrack.naturalSize;
    //1250000
    NSDictionary *videoWriterCompressionSettings =  [NSDictionary dictionaryWithObjectsAndKeys:[NSNumber numberWithInt:440000], AVVideoAverageBitRateKey,
                                                     [NSNumber numberWithInt:20],AVVideoMaxKeyFrameIntervalKey,
                                                     AVVideoProfileLevelH264Baseline30,AVVideoProfileLevelKey, //标清AVVideoProfileLevelH264Baseline30
                                                     [NSNumber numberWithInt:34],AVVideoExpectedSourceFrameRateKey,
                                                     nil];
    
    
    NSDictionary *videoWriterSettings;
    if (@available(iOS 11.0, *)) {
        videoWriterSettings = [NSDictionary dictionaryWithObjectsAndKeys:AVVideoCodecTypeH264, AVVideoCodecKey, videoWriterCompressionSettings, AVVideoCompressionPropertiesKey, [NSNumber numberWithFloat:videoSize.width], AVVideoWidthKey, [NSNumber numberWithFloat:videoSize.height], AVVideoHeightKey, nil];
        
      
    } else {
        // Fallback on earlier versions
         videoWriterSettings = [NSDictionary dictionaryWithObjectsAndKeys:AVVideoCodecH264, AVVideoCodecKey, videoWriterCompressionSettings, AVVideoCompressionPropertiesKey, [NSNumber numberWithFloat:videoSize.width], AVVideoWidthKey, [NSNumber numberWithFloat:videoSize.height], AVVideoHeightKey, nil];
        
    }
    AVAssetWriterInput* videoWriterInput = [AVAssetWriterInput
                                            assetWriterInputWithMediaType:AVMediaTypeVideo
                                            outputSettings:videoWriterSettings];
    
    videoWriterInput.expectsMediaDataInRealTime = YES;
    
    videoWriterInput.transform = videoTrack.preferredTransform;
    
    AVAssetWriter *videoWriter = [[AVAssetWriter alloc] initWithURL:outputURL fileType:AVFileTypeQuickTimeMovie error:nil];
    
    [videoWriter addInput:videoWriterInput];
    
    //setup video reader
    NSDictionary *videoReaderSettings = [NSDictionary dictionaryWithObject:[NSNumber numberWithInt:kCVPixelFormatType_420YpCbCr8BiPlanarVideoRange] forKey:(id)kCVPixelBufferPixelFormatTypeKey];
    
    AVAssetReaderTrackOutput *videoReaderOutput = [[AVAssetReaderTrackOutput alloc] initWithTrack:videoTrack outputSettings:videoReaderSettings];
    
    AVAssetReader *videoReader = [[AVAssetReader alloc] initWithAsset:videoAsset error:nil];
    
    [videoReader addOutput:videoReaderOutput];
    
    //setup audio writer
    AVAssetWriterInput* audioWriterInput = [AVAssetWriterInput
                                            assetWriterInputWithMediaType:AVMediaTypeAudio
                                            outputSettings:nil];
    
    audioWriterInput.expectsMediaDataInRealTime = NO;
    
    [videoWriter addInput:audioWriterInput];
    
    //setup audio reader
    AVAssetTrack* audioTrack = [[videoAsset tracksWithMediaType:AVMediaTypeAudio] objectAtIndex:0];
    
    AVAssetReaderOutput *audioReaderOutput = [AVAssetReaderTrackOutput assetReaderTrackOutputWithTrack:audioTrack outputSettings:nil];
    
    AVAssetReader *audioReader = [AVAssetReader assetReaderWithAsset:videoAsset error:nil];
    
    [audioReader addOutput:audioReaderOutput];
    
    [videoWriter startWriting];
    
    //start writing from video reader
    [videoReader startReading];
    
    [videoWriter startSessionAtSourceTime:kCMTimeZero];
    
    dispatch_queue_t processingQueue = dispatch_queue_create("processingQueue1", NULL);
    
    [videoWriterInput requestMediaDataWhenReadyOnQueue:processingQueue usingBlock:
     ^{
         
         while ([videoWriterInput isReadyForMoreMediaData]) {
             
             CMSampleBufferRef sampleBuffer;
             
             if ([videoReader status] == AVAssetReaderStatusReading &&
                 (sampleBuffer = [videoReaderOutput copyNextSampleBuffer])) {
                 
                 [videoWriterInput appendSampleBuffer:sampleBuffer];
                 CFRelease(sampleBuffer);
             }
             
             else {
                 
                 [videoWriterInput markAsFinished];
                 
                 if ([videoReader status] == AVAssetReaderStatusCompleted) {
                     
                     //start writing from audio reader
                     [audioReader startReading];
                     
                     [videoWriter startSessionAtSourceTime:kCMTimeZero];
                     
                     dispatch_queue_t processingQueue = dispatch_queue_create("processingQueue2", NULL);
                     
                     [audioWriterInput requestMediaDataWhenReadyOnQueue:processingQueue usingBlock:^{
                         
                         while (audioWriterInput.readyForMoreMediaData) {
                             
                             CMSampleBufferRef sampleBuffer;
                             
                             if ([audioReader status] == AVAssetReaderStatusReading &&
                                 (sampleBuffer = [audioReaderOutput copyNextSampleBuffer])) {
                                 
                                 [audioWriterInput appendSampleBuffer:sampleBuffer];
                                 CFRelease(sampleBuffer);
                             }
                             
                             else {
                                 
                                 [audioWriterInput markAsFinished];
                                 
                                 if ([audioReader status] == AVAssetReaderStatusCompleted) {
                                     
                                     [videoWriter finishWritingWithCompletionHandler:^(){

                                         
//                                          [self switchMOVtoMP:outputURL];
                                     }];
                                     
                                 }
                             }
                         }
                         
                     }
                      ];
                 }
             }
         }
     }
     ];
}

//-------------video end




-(void)initData{
    _myCtbArray = [[NSMutableArray alloc] init];
    
    _topView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, screen_width, 64+40)];
    [self.view addSubview:_topView];
}

-(void)setNav{
    _topNav = [[UIView alloc] initWithFrame:CGRectMake(0, 0, screen_width, 64)];
    _topNav.backgroundColor = RGB(250, 250, 250);
//    [self.view addSubview:_topNav];
    //下划线
    UIView *lineView = [[UIView alloc] initWithFrame:CGRectMake(0, 63.5, screen_width, 0.5)];
    lineView.backgroundColor = RGB(192, 192, 192);
    [_topNav addSubview:lineView];
    
    //地图
    UIButton *mapBtn = [UIButton buttonWithType:UIButtonTypeCustom];
    mapBtn.frame = CGRectMake(10, 30, 23, 23);
    [mapBtn setImage:[UIImage imageNamed:@"icon_map"] forState:UIControlStateNormal];
    [mapBtn addTarget:self action:@selector(OnBackBtn:) forControlEvents:UIControlEventTouchUpInside];
    [_topNav addSubview:mapBtn];
    //搜索
    UIButton *searchBtn = [UIButton buttonWithType:UIButtonTypeCustom];
    searchBtn.frame = CGRectMake(screen_width-42, 30, 23, 23);
    [searchBtn setImage:[UIImage imageNamed:@"icon_search"] forState:UIControlStateNormal];
    [searchBtn addTarget:self action:@selector(OnSearchBtn:) forControlEvents:UIControlEventTouchUpInside];
    [_topNav addSubview:searchBtn];
    
    //segment
    UIButton *segBtn1 = [UIButton buttonWithType:UIButtonTypeCustom];
    segBtn1.frame = CGRectMake(screen_width/2-80, 30, 80, 30);
    segBtn1.tag = 20;
    [segBtn1 setTitle:@"错题本" forState:UIControlStateNormal];
    [segBtn1 setTitleColor:[UIColor whiteColor] forState:UIControlStateSelected];
    [segBtn1 setTitleColor:navigationBarColor forState:UIControlStateNormal];
    [segBtn1 setBackgroundColor:navigationBarColor];
    segBtn1.selected = YES;
    segBtn1.font = [UIFont systemFontOfSize:15];
    segBtn1.layer.borderWidth = 1;
    segBtn1.layer.borderColor = [navigationBarColor CGColor];
    [segBtn1 addTarget:self action:@selector(OnSegBtn:) forControlEvents:UIControlEventTouchUpInside];
    [_topNav addSubview:segBtn1];
    
    UIButton *segBtn2 = [UIButton buttonWithType:UIButtonTypeCustom];
    segBtn2.frame = CGRectMake(screen_width/2, 30, 80, 30);
    segBtn2.tag = 21;
    [segBtn2 setTitle:@"复述本" forState:UIControlStateNormal];
    [segBtn2 setTitleColor:[UIColor whiteColor] forState:UIControlStateSelected];
    [segBtn2 setTitleColor:navigationBarColor forState:UIControlStateNormal];
    [segBtn2 setBackgroundColor:[UIColor whiteColor]];
    segBtn2.font = [UIFont systemFontOfSize:15];
    segBtn2.layer.borderWidth = 1;
    segBtn2.layer.borderColor = [navigationBarColor CGColor];
    [segBtn2 addTarget:self action:@selector(OnSegBtn:) forControlEvents:UIControlEventTouchUpInside];
    [_topNav addSubview:segBtn2];
    
    [self.topView addSubview:_topNav];
}


-(void)setClassTabs{
    //筛选
    _classTabs= [[UIView alloc] initWithFrame:CGRectMake(0, 64, screen_width, 40)];
    _classTabs.backgroundColor = [UIColor whiteColor];
//    [self.view addSubview:_classTabs];
    
    NSArray *className = @[@"全部",@"语文",@"数学",@"英语",@"科学"];
    NSInteger count =className.count;
    //筛选
    for (NSInteger i=0; i<count; i++) {
        //文字
        UIButton *filterBtn = [UIButton buttonWithType:UIButtonTypeCustom];
//        filterBtn.frame = CGRectMake(i*screen_width/3, 0, screen_width/3-15, 40);
        filterBtn.frame = CGRectMake(i*50, 0, 50, 40);
        filterBtn.tag = 100+i;
        filterBtn.font = [UIFont systemFontOfSize:13];
        [filterBtn setTitle:className[i] forState:UIControlStateNormal];
        [filterBtn setTitleColor:[UIColor blackColor] forState:UIControlStateNormal];
        [filterBtn setTitleColor:navigationBarColor forState:UIControlStateSelected];
        [filterBtn addTarget:self action:@selector(OnFilterBtn:) forControlEvents:UIControlEventTouchUpInside];
        [_classTabs addSubview:filterBtn];
        
        //三角
        UIButton *sanjiaoBtn = [UIButton buttonWithType:UIButtonTypeCustom];
        sanjiaoBtn.frame = CGRectMake((i+1)*screen_width/3-15, 16, 8, 7);
        sanjiaoBtn.tag = 120+i;
        [sanjiaoBtn setImage:[UIImage imageNamed:@"icon_arrow_dropdown_normal"] forState:UIControlStateNormal];
        [sanjiaoBtn setImage:[UIImage imageNamed:@"icon_arrow_dropdown_selected"] forState:UIControlStateSelected];
        [_classTabs addSubview:sanjiaoBtn];
    }
    //下划线
    UIView *lineView = [[UIView alloc] initWithFrame:CGRectMake(0, 39.5, screen_width, 0.5)];
    lineView.backgroundColor = RGB(192, 192, 192);
    [_classTabs addSubview:lineView];
    
    [self.topView addSubview:_classTabs];
}

-(void)setUpTableView{
    //tableview
    self.tableView = [[UITableView alloc] initWithFrame:CGRectMake(0, 64+40, screen_width, screen_height) style:UITableViewStylePlain];
//    self.tableView = [[UITableView alloc] initWithFrame:CGRectMake(0, 0, screen_width, screen_height) style:UITableViewStylePlain];
    self.tableView.delegate = self;
    self.tableView.dataSource = self;
    self.tableView.separatorStyle = UITableViewCellSeparatorStyleNone;
    [self.view addSubview:self.tableView];
    
//    self.tableView.tableHeaderView = _topView;
    
    [_tableView registerClass:[SbenTableCell class] forCellReuseIdentifier:@"SCHEDULE_TABLE"];
    
    // 添加下拉的动画图片
    // 设置下拉刷新回调
    [self.tableView addGifHeaderWithRefreshingTarget:self refreshingAction:@selector(loadNewData)];
//    [self.tableView addGifFooterWithRefreshingTarget:self refreshingAction:@selector(loadNewData)];
    
    // 马上进入刷新状态
    [self.tableView.gifHeader beginRefreshing];
}



#pragma mark - UITableViewDataSource
-(NSInteger)numberOfSectionsInTableView:(UITableView *)tableView{
    return 1;
}

-(NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section{
    return _myCtbArray.count;
}
-(CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath{
    return 92;
}
-(CGFloat)tableView:(UITableView *)tableView heightForHeaderInSection:(NSInteger)section{
    return 32;
}

-(UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath{
    static NSString *cellIndentifier = @"SCHEDULE_TABLE";
    SbenTableCell *cell = [tableView dequeueReusableCellWithIdentifier:cellIndentifier];
    if (cell == nil) {
        cell = [[SbenTableCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:cellIndentifier];
    }
    
    SbenCellModel *model = _myCtbArray[indexPath.row];
    [cell setModel:model];
    return cell;
}



#pragma mark - UITableViewDelegate
-(void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath{
//    [tableView deselectRowAtIndexPath:indexPath animated:YES];
//    JZMerchantModel *jzMerM = _MerchantArray[indexPath.row];
//    NSLog(@"poiid:%@",jzMerM.poiid);
//
//    JZMerchantDetailViewController *jzMerchantDVC = [[JZMerchantDetailViewController alloc] init];
//    jzMerchantDVC.poiid = jzMerM.poiid;
//    [self.navigationController pushViewController:jzMerchantDVC animated:YES];
    
}

- (void)loadNewData
{
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        [self getMyCtbData];
    });
}

// 请求我的ctb数据
-(void)getMyCtbData
{
    __weak typeof(self) weakself = self;
    NSString *urlStr = @"http://localhost:8080/myctb/1";
    [[NetworkSingleton sharedManager] getRecommendCourseResult:nil url:urlStr successBlock:^(id responseBody){
        NSLog(@"请求我的错题本成功");
        NSMutableArray *data = [responseBody objectForKey:@"data"];
        
        int size = data.count;
        for (int i = 0; i < size; ++i)
        {
            SbenCellModel *ctbCellModel = [SbenCellModel objectWithKeyValues:data[i]];
            [_myCtbArray addObject:ctbCellModel];
        }
        
        weakself.tableView.hidden = NO;
        [weakself.tableView reloadData];
        [weakself.tableView.header endRefreshing];
    } failureBlock:^(NSString *error)
     {
         //[SVProgressHUD showErrorWithStatus:error];
         NSLog(@"请求我的错题本失败：%@",error);
         [weakself.tableView.header endRefreshing];
     }];
}

#pragma mark - <UIScrollViewDelegate>
- (void)scrollViewDidScroll:(UIScrollView *)scrollView
{
//    _topToolView.hidden = (scrollView.contentOffset.y < 0) ? YES : NO;
    
    CGFloat _y = scrollView.contentOffset.y;
    CGFloat _top = scrollView.bounds.origin.y;
    CGFloat _topViewY = _topView.frame.origin.y;
    
    if(_y < 0){//往下滚动
//        NSLog(@"-滚动条位置: %@", @(_y));
//        NSLog(@"-滚动条位置-top: %@", @(_top));
//        _topView.frame = CGRectMake(0, -_y, screen_width, 64+40);
//
//        _topViewY = -_y;
//
//        NSLog(@"-topView.frame.y: %@", @(_topView.frame.origin.y));
    } else if(_y > 0){
//        NSLog(@"+滚动条位置-top: %@", @(_top));
//        NSLog(@"+滚动条位置: %@", @(_y));
//        if(_topViewY > -64 ){
//            _topView.frame = CGRectMake(0, -_y, screen_width, 64+40);
//            self.tableView.frame = CGRectMake(0, 64+40-_y, screen_width, screen_height);
//            scrollView.bounds = CGRectOffset(scrollView.bounds, 0, 64+40-_y);
//        }
//
//        NSLog(@"+topView.frame.y: %@", @(_topView.frame.origin.y));
    } else{
//        NSLog(@"0滚动条位置-top: %@", @(_top));
//        if(_topViewY >= -64 && _topViewY < 0){
//            _topView.frame = CGRectMake(0, -_y, screen_width, 64+40);
//        }
    }
    
//    _classTabs._y = scrollView.contentOffset.y;
    
//    if (scrollView.contentOffset.y > DCNaviH) {
//        [UIApplication sharedApplication].statusBarStyle = UIStatusBarStyleDefault;
//        [[NSNotificationCenter defaultCenter]postNotificationName:SHOWTOPTOOLVIEW object:nil];
//    }else{
//        [UIApplication sharedApplication].statusBarStyle = UIStatusBarStyleLightContent;
//        [[NSNotificationCenter defaultCenter]postNotificationName:HIDETOPTOOLVIEW object:nil];
//    }
    
}

@end
