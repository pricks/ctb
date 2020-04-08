//
//  NetworkSingleton.h
//  ctb
//
//  Created by 封亚飞 on 2020/4/7.
//  Copyright © 2020 封亚飞. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "AFNetworking.h"

//请求超时
#define TIMEOUT 30

typedef void(^SuccessBlock)(id responseBody);
typedef void(^FailureBlock)(NSString *error);


@interface NetworkSingleton : NSObject

+(NetworkSingleton *)sharedManager;
-(AFHTTPRequestOperationManager *)baseHtppRequest;

#pragma mark - 推荐课程

#pragma mark - 获取推荐课程内容
-(void)getRecommendCourseResult:(NSDictionary *)userInfo url:(NSString *)url successBlock:(SuccessBlock)successBlock failureBlock:(FailureBlock)failureBlock;

#pragma mark - 获取课程详情
-(void)getClassListResult:(NSDictionary *)userInfo url:(NSString *)url successBlock:(SuccessBlock)successBlock failureBlock:(FailureBlock)failureBlock;

#pragma mark - 获取课程评价
-(void)getClassEvalResult:(NSDictionary *)userInfo url:(NSString *)url successBlock:(SuccessBlock)successBlock failureBlock:(FailureBlock)failureBlock;

#pragma mark - Get
-(void)getDataResult:(NSDictionary *)userInfo url:(NSString *)url successBlock:(SuccessBlock)successBlock failureBlock:(FailureBlock)failureBlock;

#pragma mark - 获取搜索课程信息
-(void)getSearchResult:(NSDictionary *)userInfo url:(NSString *)url successBlock:(SuccessBlock)successBlock failureBlock:(FailureBlock)failureBlock;

@end
