//
//  SbenCell.h
//  ctb
//
//  Created by yueming on 2020/4/1.
//  Copyright © 2020 yueming. All rights reserved.
//


#import <UIKit/UIKit.h>
#import "FSbenCellModel.h"

//ctb表格行
@interface FSbenTableCell : UITableViewCell

@property (nonatomic, strong) FSbenCellModel *model;

+ (CGFloat)fixedHeight;

@end
