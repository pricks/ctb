//
//  SbenUploadImg.m
//  ctb
//
//  Created by 封亚飞 on 2020/5/3.
//  Copyright © 2020 封亚飞. All rights reserved.
//

#import "SbenUploadImgController.h"

#import "GlobalDefines.h"
#import "AppDelegate.h"
#import "NetworkSingleton.h"
#import "MJRefresh.h"
#import "MJExtension.h"

#import "KKCutTool.h"

#import <MobileCoreServices/MobileCoreServices.h>
#import <AVFoundation/AVFoundation.h>

@interface SbenUploadImgController ()<UIScrollViewDelegate,UITableViewDataSource,UITableViewDelegate,UIGestureRecognizerDelegate>
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

@implementation SbenUploadImgController

#pragma mark - LifeCyle
- (void)viewDidLoad {
    [super viewDidLoad];
    
    [self setUpBase];
    [self setUpContent];
    
//    [self setUpHeadView];
}

#pragma mark - base
- (void)setUpBase {
    self.view.backgroundColor = [UIColor whiteColor];
    self.automaticallyAdjustsScrollViewInsets = false;
    
}

- (void)setUpContent
{
    CGFloat title_H = 110, row_H = 50, row_title_W = 100;
    
    UILabel *viewTitle = [[UILabel alloc] init];
    viewTitle.text = @"错题秒传";
    viewTitle.frame = CGRectMake(50, 30, (screen_width-50-50), title_H);//居中
    viewTitle.font = [UIFont systemFontOfSize:20];
    viewTitle.textAlignment = NSTextAlignmentCenter;
    viewTitle.lineBreakMode = NSLineBreakByTruncatingTail;
    viewTitle.numberOfLines = 1;
    [self.view addSubview:viewTitle];
    
    //分类
    UILabel *categoryLabel = [[UILabel alloc] init];
    categoryLabel.text = @"错题分类:";
    categoryLabel.frame = CGRectMake(15, title_H, row_title_W, row_H);
    categoryLabel.font = [UIFont systemFontOfSize:15];
    categoryLabel.textAlignment = NSTextAlignmentLeft;
    [self.view addSubview:categoryLabel];
    
    UITextField *category = [[UITextField alloc] init];
    category.frame = CGRectMake(15+row_title_W, title_H, 320, row_H);
    category.font = [UIFont systemFontOfSize:15];
    category.placeholder = @"请选择分类";
    category.textAlignment = NSTextAlignmentLeft;
    [self.view addSubview:category];
    
    UIView *line1 = [[UIView alloc] init];
    line1.frame = CGRectMake(15, title_H + row_H, screen_width-15-15, 1);
    line1.backgroundColor = separaterColor;
    [self.view addSubview:line1];
    
    
    
    //标题
    UILabel *titleLabel = [[UILabel alloc] init];
    titleLabel.text = @"错题名称:";
    titleLabel.frame = CGRectMake(15, title_H + row_H + 1, row_title_W, row_H);
    titleLabel.font = [UIFont systemFontOfSize:15];
    titleLabel.textAlignment = NSTextAlignmentLeft;
    [self.view addSubview:titleLabel];
    
    UITextField *title = [[UITextField alloc] init];
    title.frame = CGRectMake(15+row_title_W, title_H + row_H + 1, 320, row_H);
    title.font = [UIFont systemFontOfSize:15];
    title.placeholder = @"请输入一个简易好记的名字吧";
    title.textAlignment = NSTextAlignmentLeft;
    [self.view addSubview:title];
    
    UIView *line2 = [[UIView alloc] init];
    line2.frame = CGRectMake(15, title_H+1+row_H*2, screen_width-15-15, 1);
    line2.backgroundColor = separaterColor;
    [self.view addSubview:line2];
    
    
    
    //拍照的图片
    UIImageView *ctb_image = [[UIImageView alloc] init];
    ctb_image.frame = CGRectMake(5, title_H + row_H*2 + 12, (screen_width-10), 80);
    ctb_image.image = self.image;
    [self.view addSubview:ctb_image];
    
    
    //默认剪切
    KKCutTool *cutTool = [KKCutTool new];
    [cutTool setup:ctb_image frame:ctb_image.frame];
    
    
    UIButton *button = [[UIButton alloc] init];
    [button setTitle:@"保存" forState:0];
    button.frame = CGRectMake(0, 0, 44, 44);
//    button.titleLabel.font = PFR16Font;
    [button setTitleColor:[UIColor blackColor] forState:0];
    [button addTarget:self action:@selector(saveButtonBarItemClick) forControlEvents:UIControlEventTouchUpInside];
    UIBarButtonItem *backButton = [[UIBarButtonItem alloc] initWithCustomView:button];
}


@end
