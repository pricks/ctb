//
//  PhotoClipView.m
//  CameraDemo
//
//  Created by yml_hubery on 2017/6/10.
//  Copyright © 2017年 yh. All rights reserved.
//

#import "PhotoClipView.h"
//#import "PhotoClipCoverView.h"

#import "KKCutTool.h"

@interface PhotoClipView ()

/** 图片 */
@property (strong, nonatomic) UIImageView *imageV;

/** 图片加载后的初始位置 */
@property (assign, nonatomic) CGRect norRect;

/** 裁剪框frame */
@property (assign, nonatomic) CGRect showRect;


@end

@implementation PhotoClipView{
    //类私有变量
    KKCutTool *_cut;
}

- (instancetype)initWithFrame:(CGRect)frame{
    
    self = [super initWithFrame:frame];
    
    if (self) {
        
        self.backgroundColor = [UIColor blackColor];
        [self createSubViews];
    }
    return self;
}

- (void)createSubViews{
    
    self.imageV = [[UIImageView alloc] initWithFrame:CGRectMake(0, 0 , self.frame.size.width, self.frame.size.width)];
    [self addSubview:self.imageV];

    //添加默认的裁剪层-这是本工程原本自带的效果
//    PhotoClipCoverView *coverView = [[PhotoClipCoverView alloc] initWithFrame:self.bounds];
//    [coverView addGestureRecognizer:[[UIPanGestureRecognizer alloc] initWithTarget:self action:@selector(panGR:)]];
//    [coverView addGestureRecognizer:[[UIPinchGestureRecognizer alloc] initWithTarget:self action:@selector(pinGR:)]];
//    self.showRect = CGRectMake(1, self.frame.size.height * 0.15,self.frame.size.width - 2 ,self.frame.size.width - 2);
//    coverView.showRect = self.showRect;
//    [self addSubview:coverView];
    
    
    
    
    
    
    UIView *bottomView = [[UIView alloc] initWithFrame:CGRectMake(0, self.frame.size.height - 60, self.frame.size.width, 60)];
    bottomView.backgroundColor = [[UIColor blackColor] colorWithAlphaComponent:0.6f];
//    [coverView addSubview:bottomView];//我改的，改成下面这行
    [self addSubview:bottomView];
    
    //重拍
    UIButton *remarkBtn = [UIButton buttonWithType:UIButtonTypeCustom];
    remarkBtn.frame = CGRectMake(10, 15, 60, 30);
    [remarkBtn setTitle:@"重拍" forState:UIControlStateNormal];
    [remarkBtn setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];
    remarkBtn.backgroundColor = [UIColor clearColor];
    remarkBtn.titleLabel.font = [UIFont systemFontOfSize:15];
    [remarkBtn addTarget:self action:@selector(leftButtonClicked) forControlEvents:UIControlEventTouchUpInside];
    [bottomView addSubview:remarkBtn];
    
    //使用照片
    UIButton *sureBtn = [UIButton buttonWithType:UIButtonTypeCustom];
    sureBtn.frame = CGRectMake(bottomView.frame.size.width - 90, 15, 80, 30);
    [sureBtn setTitle:@"使用照片" forState:UIControlStateNormal];
    [sureBtn setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];
    sureBtn.backgroundColor = [UIColor clearColor];
    sureBtn.titleLabel.font = [UIFont systemFontOfSize:15];
    [sureBtn addTarget:self action:@selector(rightButtonClicked) forControlEvents:UIControlEventTouchUpInside];
    [bottomView addSubview:sureBtn];
    
}

- (void)setImage:(UIImage *)image{
    
    if (image) {
        CGFloat ret = image.size.height / image.size.width;
        _imageV.height = _imageV.width * ret;
        _imageV.center = self.center;
        _norRect = _imageV.frame;
        _imageV.image = image;
        
        
        //我改的，下面这4行添加我定义的裁剪层，可以缩放裁剪框，从而裁剪更扁平的图片
        float width = [UIScreen mainScreen].bounds.size.width;
        float height = [UIScreen mainScreen].bounds.size.height;
        _cut = [KKCutTool alloc];
        //NSLog(@"%f %f", _imageV.height, _imageV.width);
        
        //到了这一步，由于imageV加载了图片，因此imageV的高度和宽度被自动计算出来
        //这里不能使用image.size.height，这个值很大，有几千甚至几万(取决于摄像头像素)
        //下面这行frame设置的效果是：让裁剪框的上下滑动范围被限定在图片的上边框和下边框范围之内
        [_cut setup:self frame:CGRectMake(3, (height-_imageV.height)/2, width-6, _imageV.height)];
    //    [cut setup:self frame:self.frame];
    }
    
    _image = image;
    
}


- (void)pinGR:(UIPinchGestureRecognizer *)sender{
    
    _imageV.transform = CGAffineTransformScale(_imageV.transform, sender.scale, sender.scale);

    sender.scale = 1.0;
    
    if (sender.state == UIGestureRecognizerStateEnded) {
        
        [UIView animateWithDuration:0.3f animations:^{
            _imageV.frame = _norRect;
        }];
    }
}


#pragma mark -- 重拍

- (void)leftButtonClicked{
    NSLog(@"重拍");
    if (self.remakeBlock) {
        self.remakeBlock();
    }
    
}

#pragma mark -- 使用照片

- (void)rightButtonClicked{
    NSLog(@"使用照片");
    
    CGFloat w = _imageV.image.size.width;
    CGRect rct = [_cut cutRect];
    CGFloat zoomScale = _imageV.frame.size.width / w;
    rct.size.width  /= zoomScale;
    rct.size.height /= zoomScale;
    rct.origin.x    /= zoomScale;
    rct.origin.y    /= zoomScale;
    
    UIImage *image = [self imageFromImage:_imageV.image inRect:rct];
    //_imageV.image = image;

    if (self.sureUseBlock) {
        self.sureUseBlock(image);
    }
}

- (UIImage *)imageFromImage:(UIImage *)image inRect:(CGRect)rect{
    
    //将UIImage转换成CGImageRef
    CGImageRef sourceImageRef = [image CGImage];
    
    //按照给定的矩形区域进行剪裁
    CGImageRef newImageRef = CGImageCreateWithImageInRect(sourceImageRef, rect);
    
    //将CGImageRef转换成UIImage
    UIImage *newImage = [UIImage imageWithCGImage:newImageRef];
    
    //返回剪裁后的图片
    return newImage;
}


@end
