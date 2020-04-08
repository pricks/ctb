//
//  SbenViewController.m
//  ctb
//
//  Created by 封亚飞 on 2020/3/29.
//  Copyright © 2020 封亚飞. All rights reserved.
//

#import "SbenViewController.h"
#import "SbenTableCell.h"
#import "SbenCellModel.h"

#import "GlobalDefines.h"
#import "AppDelegate.h"
#import "NetworkSingleton.h"
#import "MJRefresh.h"
#import "MJExtension.h"

@interface SbenViewController ()<UITableViewDataSource,UITableViewDelegate,UIGestureRecognizerDelegate>
{
    NSMutableArray *_MerchantArray;
    NSString *_locationInfoStr;
    NSInteger _KindID;//分类查询ID，默认-1
    
    NSInteger _offset;
    
    
    UIView *_maskView;
}
@end

@implementation SbenViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    
    self.navigationController.navigationBarHidden = YES;
    self.view.backgroundColor = [UIColor whiteColor];
    
//    [self initData];
//    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
//        [self getCateListData];
//    });
    self.navigationController.interactivePopGestureRecognizer.delegate = nil;
    [self setNav];
    [self initViews];
//    [self initMaskView];
}


-(void)setNav{
    UIView *backView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, screen_width, 64)];
    backView.backgroundColor = RGB(250, 250, 250);
    [self.view addSubview:backView];
    //下划线
    UIView *lineView = [[UIView alloc] initWithFrame:CGRectMake(0, 63.5, screen_width, 0.5)];
    lineView.backgroundColor = RGB(192, 192, 192);
    [backView addSubview:lineView];
    
    //地图
    UIButton *mapBtn = [UIButton buttonWithType:UIButtonTypeCustom];
    mapBtn.frame = CGRectMake(10, 30, 23, 23);
    [mapBtn setImage:[UIImage imageNamed:@"icon_map"] forState:UIControlStateNormal];
    [mapBtn addTarget:self action:@selector(OnBackBtn:) forControlEvents:UIControlEventTouchUpInside];
    [backView addSubview:mapBtn];
    //搜索
    UIButton *searchBtn = [UIButton buttonWithType:UIButtonTypeCustom];
    searchBtn.frame = CGRectMake(screen_width-42, 30, 23, 23);
    [searchBtn setImage:[UIImage imageNamed:@"icon_search"] forState:UIControlStateNormal];
    [searchBtn addTarget:self action:@selector(OnSearchBtn:) forControlEvents:UIControlEventTouchUpInside];
    [backView addSubview:searchBtn];
    
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
    [backView addSubview:segBtn1];
    
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
    [backView addSubview:segBtn2];
}


-(void)initViews{
    //筛选
    UIView *filterView = [[UIView alloc] initWithFrame:CGRectMake(0, 64, screen_width, 40)];
    filterView.backgroundColor = [UIColor whiteColor];
    [self.view addSubview:filterView];
    
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
        [filterView addSubview:filterBtn];
        
        //三角
        UIButton *sanjiaoBtn = [UIButton buttonWithType:UIButtonTypeCustom];
        sanjiaoBtn.frame = CGRectMake((i+1)*screen_width/3-15, 16, 8, 7);
        sanjiaoBtn.tag = 120+i;
        [sanjiaoBtn setImage:[UIImage imageNamed:@"icon_arrow_dropdown_normal"] forState:UIControlStateNormal];
        [sanjiaoBtn setImage:[UIImage imageNamed:@"icon_arrow_dropdown_selected"] forState:UIControlStateSelected];
        [filterView addSubview:sanjiaoBtn];
    }
    //下划线
    UIView *lineView = [[UIView alloc] initWithFrame:CGRectMake(0, 39.5, screen_width, 0.5)];
    lineView.backgroundColor = RGB(192, 192, 192);
    [filterView addSubview:lineView];
    
    
    
    
    //tableview
    self.tableView = [[UITableView alloc] initWithFrame:CGRectMake(0, 64+40, screen_width, screen_height-64-40-49) style:UITableViewStylePlain];
    self.tableView.delegate = self;
    self.tableView.dataSource = self;
    self.tableView.separatorStyle = UITableViewCellSeparatorStyleNone;
    [self.view addSubview:self.tableView];
    
    // 添加下拉的动画图片
    // 设置下拉刷新回调
    [self.tableView addGifHeaderWithRefreshingTarget:self refreshingAction:@selector(loadNewData)];
    
//    [self setUpTableView];
}

//获取商家列表
-(void)getMerchantList{
    AppDelegate *delegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    NSString *str = @"%2C";
    
    NSString *hostStr = @"http://api.meituan.com/group/v1/poi/select/cate/";
    NSString *paramsStr = @"?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=WOdaAXJTFxIjDdjmt1z%2FJRzB6Y0%3D&__skno=91D0095F-156B-4392-902A-A20975EB9696&__skts=1436408836.151516&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&areaId=-1&ci=1&cityId=1&client=iphone&coupon=all&limit=20&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-07-09-09-42570&mypos=";
    
    NSString *str1 = [NSString stringWithFormat:@"%@%ld%@",hostStr,(long)_KindID,paramsStr];
    
    NSString *str2 = @"&sort=smart&userid=10086&utm_campaign=AgroupBgroupD100Fa20141120nanning__m1__leftflow___ab_pindaochangsha__a__leftflow___ab_gxtest__gd__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_i550poi_ktv__d__j___ab_chunceshishuju__a__a___ab_gxh_82__nostrategy__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi0202__b__a___ab_pindaoshenyang__a__leftflow___ab_pindaoquxincelue0630__b__b1___ab_i_group_5_6_searchkuang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_i550poi_xxyl__b__leftflow___ab_b_food_57_purepoilist_extinfo__a__a___ab_waimaiwending__a__a___ab_waimaizhanshi__b__b1___ab_i550poi_lr__d__leftflow___ab_i_group_5_5_onsite__b__b___ab_xinkeceshi__b__leftflowGmerchant&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7";
    
    
//    NSString *urlStr = [NSString stringWithFormat:@"%@%f%@%f&offset=%zd%@",str1, delegate.latitude, str, delegate.longitude, _offset,str2];
//
//    __weak __typeof(self) weakself = self;
//    [[NetworkSingleton sharedManager] getMerchantListResult:nil url:urlStr successBlock:^(id responseBody){
//        NSLog(@"获取商家列表成功");
//        NSMutableArray *dataArray = [responseBody objectForKey:@"data"];
//        NSLog(@"%ld",dataArray.count);
//        NSLog(@"offset:%ld",_offset);
//        if (_offset == 0) {
//            NSLog(@"0000");
//            [_MerchantArray removeAllObjects];
//        }
//
//        for (int i = 0; i < dataArray.count; i++) {
//            JZMerchantModel *JZMerM = [JZMerchantModel objectWithKeyValues:dataArray[i]];
//            [_MerchantArray addObject:JZMerM];
//        }
//
//        [weakself.tableView reloadData];
//
//        if (_offset == 0 && dataArray.count!=0) {
//            [weakself.tableView scrollToRowAtIndexPath:[NSIndexPath indexPathForRow:0 inSection:0] atScrollPosition:UITableViewScrollPositionTop animated:YES];
//        }
//        [weakself.tableView.header endRefreshing];
//        [weakself.tableView.footer endRefreshing];
//
//    } failureBlock:^(NSString *error){
//        NSLog(@"获取商家列表失败：%@",error);
//        [weakself.tableView.header endRefreshing];
//        [weakself.tableView.footer endRefreshing];
//    }];
    
}

//获取当前位置
-(void)getPresentLocation{
    AppDelegate *delegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    NSString *urlStr = @"http://api.meituan.com/group/v1/city/latlng/39.982207,116.311906?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=dhdVkMoRTQge4RJQFlm2iIF2e5s%3D&__skno=9B646232-F7BF-4642-B9B0-9A6ED68003D2&__skts=1436408843.060582&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&ci=1&client=iphone&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-07-09-09-42570&tag=1&userid=10086&utm_campaign=AgroupBgroupD100Fa20141120nanning__m1__leftflow___ab_pindaochangsha__a__leftflow___ab_gxtest__gd__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_i550poi_ktv__d__j___ab_chunceshishuju__a__a___ab_gxh_82__nostrategy__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi0202__b__a___ab_pindaoshenyang__a__leftflow___ab_pindaoquxincelue0630__b__b1___ab_i_group_5_6_searchkuang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_i550poi_xxyl__b__leftflow___ab_b_food_57_purepoilist_extinfo__a__a___ab_waimaiwending__a__a___ab_waimaizhanshi__b__b1___ab_i550poi_lr__d__leftflow___ab_i_group_5_5_onsite__b__b___ab_xinkeceshi__b__leftflowGmerchant&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7";
    _locationInfoStr = @"正在定位...";
    [self.tableView reloadData];
    __weak __typeof(self) weakself = self;
//    [[NetworkSingleton sharedManager] getPresentLocationResult:nil url:urlStr successBlock:^(id responseBody){
//        NSLog(@"获取当前位置信息成功");
//        NSDictionary *dataDic = [responseBody objectForKey:@"data"];
//        _locationInfoStr = [dataDic objectForKey:@"detail"];
//
//        NSUserDefaults *userD = [NSUserDefaults standardUserDefaults];
//        [userD setObject:_locationInfoStr forKey:@"location"];
//
//        [weakself.tableView reloadData];
//    } failureBlock:^(NSString *error){
//        NSLog(@"获取当前位置信息失败:%@",error);
//    }];
}

//获取cate分组信息
-(void)getCateListData{
    NSString *urlStr = @"http://api.meituan.com/group/v1/poi/cates/showlist?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=hSjSxtGbfd1QtKRMWnoFV4GB8jU%3D&__skno=0DEF926E-FB94-43B8-819E-DD510241BCC3&__skts=1436504818.875030&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&ci=1&cityId=1&client=iphone&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-07-10-12-44726&userid=10086&utm_campaign=AgroupBgroupD100Fa20141120nanning__m1__leftflow___ab_pindaochangsha__a__leftflow___ab_gxtest__gd__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_i550poi_ktv__d__j___ab_chunceshishuju__a__a___ab_gxh_82__nostrategy__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi0202__b__a___ab_pindaoquxincelue0630__b__b1___ab_i550poi_xxyl__b__leftflow___ab_i_group_5_6_searchkuang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_pindaoshenyang__a__leftflow___ab_b_food_57_purepoilist_extinfo__a__a___ab_waimaiwending__a__a___ab_waimaizhanshi__b__b1___ab_i550poi_lr__d__leftflow___ab_i_group_5_5_onsite__b__b___ab_xinkeceshi__b__leftflowGmerchant&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7";
    
//    [[NetworkSingleton sharedManager] getCateListResult:nil url:urlStr successBlock:^(id responseBody){
//        NSLog(@"获取cate分组信息成功");
//    } failureBlock:^(NSString *error){
//        NSLog(@"获取cate分组信息失败:%@",error);
//    }];
}



#pragma mark - UITableViewDataSource
-(NSInteger)numberOfSectionsInTableView:(UITableView *)tableView{
    return 1;
}

-(NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section{
    //return _MerchantArray.count;
    return 6;
}
-(CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath{
    return 92;
}
-(CGFloat)tableView:(UITableView *)tableView heightForHeaderInSection:(NSInteger)section{
    return 32;
}

-(UIView *)tableView:(UITableView *)tableView viewForHeaderInSection:(NSInteger)section{
    UIView *headerView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, screen_width, 30)];
    headerView.backgroundColor = RGB(240, 239, 237);
    
    //
    UILabel *locationLabel = [[UILabel alloc] initWithFrame:CGRectMake(10, 0, screen_width-10-40, 30)];
    locationLabel.font = [UIFont systemFontOfSize:13];
//    locationLabel.text = @"当前：海淀区中关村大街";
    locationLabel.text = [NSString stringWithFormat:@"当前位置：%@",_locationInfoStr];
    locationLabel.textColor = [UIColor lightGrayColor];
    [headerView addSubview:locationLabel];
    
    //
    UIButton *refreshBtn = [UIButton buttonWithType:UIButtonTypeCustom];
    refreshBtn.frame = CGRectMake(screen_width-30, 5, 20, 20);
    [refreshBtn setImage:[UIImage imageNamed:@"icon_dellist_locate_refresh"] forState:UIControlStateNormal];
    [refreshBtn addTarget:self action:@selector(OnRefreshLocationBtn:) forControlEvents:UIControlEventTouchUpInside];
    [headerView addSubview:refreshBtn];
    return headerView;
}

-(UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath{
    
    SbenTableCell *cell = (SbenTableCell *)[tableView dequeueReusableCellWithIdentifier:@"SCHEDULE_TABLE"];
        if (!cell) {
            cell = [[SbenTableCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:@"SCHEDULE_TABLE"];
        }

        NSUInteger section = indexPath.section;
        NSUInteger row = indexPath.row;
    //    cell.textLabel.text = [NSString stringWithFormat:@"语文,%ld",(long)row];

        SbenCellModel *model = [SbenCellModel new];
    //    model.imageName = [SDAnalogDataGenerator randomIconImageName];
        model.className = [NSString stringWithFormat:@"语文,%ld",(long)row];
        model.time = [NSString stringWithFormat:@"上午%ld:00",(long)row];
        model.studyContent = @"20以内的加减法练习 发看到类似；假两件发快递三；九分裤大量；咖啡机大数据罚款了奥德赛；分拣啊 fafasdf范德萨就就；将理解我好好";
        cell.model = model;
        
        return cell;
    
//    static NSString *cellIndentifier = @"merchantCell";
//    JZMerchantCell *cell = [tableView dequeueReusableCellWithIdentifier:cellIndentifier];
//    if (cell == nil) {
//        cell = [[JZMerchantCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:cellIndentifier];
//    }
//
//    JZMerchantModel *jzMerM = _MerchantArray[indexPath.row];
//    cell.jzMerM = jzMerM;
////    [cell setJzMerM:jzMerM];//都行
//
//    return cell;
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
        [self getRecommendData];
    });
}

// 请求推荐课程数据
-(void)getRecommendData
{
    __weak typeof(self) weakself = self;
    NSString *urlStr = @"http://localhost:8080/myctb/1";
    [[NetworkSingleton sharedManager] getRecommendCourseResult:nil url:urlStr successBlock:^(id responseBody){
        NSLog(@"请求我的错题本成功");
        NSMutableArray *focusArray = [responseBody objectForKey:@"ctbList"];
        
        weakself.tableView.hidden = NO;
        [weakself.tableView reloadData];
        //[weakself.tableView.header endRefreshing];
    } failureBlock:^(NSString *error)
     {
         //[SVProgressHUD showErrorWithStatus:error];
         NSLog(@"请求我的错题本失败：%@",error);
//         [weakself.tableView.header endRefreshing];
     }];
}

@end
