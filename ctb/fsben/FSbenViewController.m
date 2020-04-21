//
//  SbenViewController.m
//  ctb
//
//  Created by yueming on 2020/3/29.
//  Copyright © 2020 yueming. All rights reserved.
//

#import "FSbenViewController.h"
#import "FSbenTableCell.h"
#import "FSbenCellModel.h"

#import "GlobalDefines.h"
#import "AppDelegate.h"
#import "NetworkSingleton.h"
#import "MJRefresh.h"
#import "MJExtension.h"

@interface FSbenViewController ()<UIScrollViewDelegate,UITableViewDataSource,UITableViewDelegate,UIGestureRecognizerDelegate>
{
    NSMutableArray *_myCtbArray;//myctb
    
    
    NSMutableArray *_MerchantArray;
    NSString *_locationInfoStr;
    NSInteger _KindID;//分类查询ID，默认-1
    
    NSInteger _offset;
    
    
    UIView *_maskView;
}
@end

@implementation FSbenViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.navigationController.navigationBarHidden = YES;
    self.view.backgroundColor = [UIColor whiteColor];
    self.navigationController.interactivePopGestureRecognizer.delegate = nil;
    
    [self initData];
    [self setNav];
    [self setClassTabs];
    [self setUpTableView];
}

-(void)initData{
    _myCtbArray = [[NSMutableArray alloc] init];
    
    _rootScrollView = [[UIScrollView alloc] initWithFrame:CGRectMake(0, 0, screen_width, screen_height)];
    _rootScrollView.contentSize = CGSizeMake(0, screen_height+64);
    [self.view addSubview:_rootScrollView];
    
    _topView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, screen_width, 64+40)];
    [_rootScrollView addSubview:_topView];
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
    self.tableView = [[UITableView alloc] initWithFrame:CGRectMake(0, 64+40, screen_width, screen_height-64-40) style:UITableViewStylePlain];
//    self.tableView = [[UITableView alloc] initWithFrame:CGRectMake(0, 0, screen_width, screen_height) style:UITableViewStylePlain];
    self.tableView.delegate = self;
    self.tableView.dataSource = self;
    self.tableView.separatorStyle = UITableViewCellSeparatorStyleNone;
    [_rootScrollView addSubview:self.tableView];
    
//    self.tableView.tableHeaderView = _topView;
    
    [_tableView registerClass:[FSbenTableCell class] forCellReuseIdentifier:@"SCHEDULE_TABLE"];
    
    // 添加下拉的动画图片
    // 设置下拉刷新回调
    [self.tableView addGifHeaderWithRefreshingTarget:self refreshingAction:@selector(loadNewData)];
//    [self.tableView addGifFooterWithRefreshingTarget:self refreshingAction:@selector(loadNewData)];
    
    // 马上进入刷新状态
//    [self.tableView.gifHeader beginRefreshing];
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
    FSbenTableCell *cell = [tableView dequeueReusableCellWithIdentifier:cellIndentifier];
    if (cell == nil) {
        cell = [[FSbenTableCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:cellIndentifier];
    }
    
    FSbenCellModel *model = _myCtbArray[indexPath.row];
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
            FSbenCellModel *ctbCellModel = [FSbenCellModel objectWithKeyValues:data[i]];
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
