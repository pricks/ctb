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
    
//    [self setUpHeadView];
}

- (void)setUpBase
{
    self.title = @"mytest";
//    self.view.backgroundColor = DCBGColor;
//    self.automaticallyAdjustsScrollViewInsets = NO;
//    self.tableView.backgroundColor = self.view.backgroundColor;
//
//    [[CitiesDataTool sharedManager] requestGetData];
//    [self.view addSubview:self.cover];
    
    UIBarButtonItem *negativeSpacer = [[UIBarButtonItem alloc] initWithBarButtonSystemItem:UIBarButtonSystemItemFixedSpace target:nil action:nil];
    negativeSpacer.width = -15;
    
    UIButton *button = [[UIButton alloc] init];
    [button setTitle:@"保存" forState:0];
    button.frame = CGRectMake(0, 0, 44, 44);
//    button.titleLabel.font = PFR16Font;
    [button setTitleColor:[UIColor blackColor] forState:0];
    [button addTarget:self action:@selector(saveButtonBarItemClick) forControlEvents:UIControlEventTouchUpInside];
    UIBarButtonItem *backButton = [[UIBarButtonItem alloc] initWithCustomView:button];
    self.navigationItem.rightBarButtonItems = @[negativeSpacer, backButton];
    [self.view addSubview:button];
}

@end
