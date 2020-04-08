//
//  SbenCell.h
//  ctb
//
//  Created by 封亚飞 on 2020/4/1.
//  Copyright © 2020 封亚飞. All rights reserved.
//


#import <UIKit/UIKit.h>
#import "SbenCellModel.h"

//课程表表格行
@interface SbenTableCell : UITableViewCell

@property (nonatomic, strong) UIImageView *iconImageView;
@property (nonatomic, strong) UILabel *classNameLabel;
@property (nonatomic, strong) UILabel *timeLabel;
@property (nonatomic, strong) UILabel *studyContentLabel;

@property (nonatomic, strong) SbenCellModel *model;

+ (CGFloat)fixedHeight;

@end
