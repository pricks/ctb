//
//  SbenTableCell.m
//  ctb
//
//  Created by yueming on 2020/4/1.
//  Copyright © 2020 yueming. All rights reserved.
//

#import "FSbenTableCell.h"
#import "UIView+SDAutoLayout.h"
#import "GlobalDefines.h"

@interface FSbenTableCell ()
{
    UILabel *_title;
    UILabel *_author;
    UILabel *_postTime;
    
    UIImageView *_classImagev;
    UIImageView *_studentImagev;
}

@end

@implementation FSbenTableCell

#pragma mark - Intial

- (void)awakeFromNib {
    [super awakeFromNib];

    [self setUpUI];
}

- (instancetype)initWithStyle:(UITableViewCellStyle)style reuseIdentifier:(NSString *)reuseIdentifier
{
    if (self = [super initWithStyle:style reuseIdentifier:reuseIdentifier]) {
        [self setUpUI];
//        [self setupGestureRecognizer];
    }
    return self;
}

- (void)setUpUI
{
    self.selectionStyle = UITableViewCellSelectionStyleNone;
    
    
    //表格行上侧的标题
//    _title = [[UILabel alloc]initWithFrame:CGRectMake(90, 5, screen_width-10-90, 20)] ;
    _title = [UILabel new];
    _title.font = [UIFont systemFontOfSize:18];
    _title.textAlignment = NSTextAlignmentLeft;
    _title.lineBreakMode = NSLineBreakByTruncatingTail;
    _title.numberOfLines = 2;//显示的文字行数。如果cell高度不够2行高度，则只会显示一行

    //表格行下侧的作者
    _author = [UILabel new];
    _author.font = [UIFont systemFontOfSize:12];
    _author.textAlignment = NSTextAlignmentLeft;

    //表格行下侧的时间
    _postTime = [UILabel new];
    _postTime.font = [UIFont systemFontOfSize:12];
    _postTime.textAlignment = NSTextAlignmentLeft;

    [self.contentView  addSubview:_title];
    [self.contentView  addSubview:_author];
    [self.contentView  addSubview:_postTime];
    
    
    UIView *superView = self.contentView;
    CGFloat margin = 10;
    
    _title.sd_layout
    .heightIs(30)
    .leftSpaceToView(superView, margin)
    .topSpaceToView(superView, margin)
    .rightSpaceToView(superView, margin);

    _author.sd_layout
    .widthIs(80)
    .topSpaceToView(_title, margin)
    .leftSpaceToView(superView, margin)
    .heightIs(20);

    _postTime.sd_layout
    .leftSpaceToView(_author, margin)
    .topEqualToView(_author)
//    .bottomSpaceToView(superView, margin * 1.3)
    .heightIs(20)
    .rightSpaceToView(superView, margin);
}

#pragma mark - properties

- (void)setModel:(FSbenCellModel *)model
{
    _model = model;
    
    _title.text = model.title;
    _author.text = model.author;
    _postTime.text = model.postTime;
}


#pragma mark - public actions

+ (CGFloat)fixedHeight
{
    return 70;
}

@end
