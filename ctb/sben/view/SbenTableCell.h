//
//  SbenCell.h
//  ctb
//
//  Created by yueming on 2020/4/1.
//  Copyright © 2020 yueming. All rights reserved.
//


#import <UIKit/UIKit.h>
#import "SbenCellModel.h"

//ctb表格行
@interface SbenTableCell : UITableViewCell

@property (nonatomic, strong) SbenCellModel *model;

+ (CGFloat)fixedHeight;

@end
