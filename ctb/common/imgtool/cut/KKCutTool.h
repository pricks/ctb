//
//  KKCutTool.h
//  WWImageEdit
//
//  Created by 邬维 on 2017/1/16.
//  Copyright © 2017年 kook. All rights reserved.
//

#import "KKImageToolBase.h"

@interface KKCutTool : KKImageToolBase

/**
 初始化工具信息
 */
- (void)setup:(UIView*)superview frame:(CGRect)frame;

//获取裁剪的矩形区域
- (CGRect) cutRect;

@end
