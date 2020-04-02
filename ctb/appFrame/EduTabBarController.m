//
//  EduTabBarController.m
//  ctb
//
//  Created by 封亚飞 on 2020/3/29.
//  Copyright © 2020 封亚飞. All rights reserved.
//

#import "EduTabBarController.h"
#import "BaseNavigationController.h"
#import "GlobalDefines.h"

#define kClassKey   @"rootVCClassString"
#define kTitleKey   @"title"
#define kImgKey     @"imageName"
#define kSelImgKey  @"selectedImageName"

@interface EduTabBarController ()

@end

@implementation EduTabBarController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    NSArray *childItemsArray = @[
                                 @{kClassKey  : @"SbenViewController",
                                   kTitleKey  : @"首页",
                                   kImgKey    : @"tabbar_mainframe",
                                   kSelImgKey : @"tabbar_mainframeHL"},
  
                                 @{kClassKey  : @"SbenViewController",
                                   kTitleKey  : @"原力本",
                                   kImgKey    : @"tabbar_contacts",
                                   kSelImgKey : @"tabbar_contactsHL"},
  
                                 @{kClassKey  : @"SbenViewController",
                                   kTitleKey  : @"发现",
                                   kImgKey    : @"tabbar_discover",
                                   kSelImgKey : @"tabbar_discoverHL"},
  
                                 @{kClassKey  : @"SbenViewController",
                                   kTitleKey  : @"我",
                                   kImgKey    : @"tabbar_me",
                                   kSelImgKey : @"tabbar_meHL"}
    ];
    
    [childItemsArray enumerateObjectsUsingBlock:^(NSDictionary *dict, NSUInteger idx, BOOL *stop) {
        UIViewController *vc = [NSClassFromString(dict[kClassKey]) new];
        vc.title = dict[kTitleKey];
        BaseNavigationController *nav = [[BaseNavigationController alloc] initWithRootViewController:vc];
        UITabBarItem *item = nav.tabBarItem;
        item.title = dict[kTitleKey];
        item.image = [UIImage imageNamed:dict[kImgKey]];
        item.selectedImage = [[UIImage imageNamed:dict[kSelImgKey]] imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal];
        [item setTitleTextAttributes:@{NSForegroundColorAttributeName : Global_tintColor} forState:UIControlStateSelected];
        [self addChildViewController:nav];
    }];
}

@end
