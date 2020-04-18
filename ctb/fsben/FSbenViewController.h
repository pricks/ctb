//
//  SbenViewController.h
//  ctb
//
//  Created by 封亚飞 on 2020/3/29.
//  Copyright © 2020 封亚飞. All rights reserved.
// 原力本MVC-控制器


#import <UIKit/UIKit.h>

@interface FSbenViewController : UIViewController

@property(nonatomic, strong) UIScrollView *rootScrollView;//根视图

@property(nonatomic, strong) UITableView *tableView;
@property(nonatomic, strong) UIView *topView;
@property(nonatomic, strong) UIView *topNav;
@property(nonatomic, strong) UIView *classTabs;

@end
