//
//  SbenTableCell.m
//  ctb
//
//  Created by 封亚飞 on 2020/4/1.
//  Copyright © 2020 封亚飞. All rights reserved.
//

#import "SbenTableCell.h"

#import "UIView+SDAutoLayout.h"

// Controllers

// Models
//#import "DCCommentsItem.h"
// Views
//#import "DCComImagesView.h"
// Vendors

// Categories

// Others

@interface SbenTableCell ()

@property (weak, nonatomic) IBOutlet UIImageView *comBgImageView;
@property (weak, nonatomic) IBOutlet UILabel *rebackLabel;
@property (weak, nonatomic) IBOutlet UILabel *comTimeLabel;
@property (weak, nonatomic) IBOutlet UILabel *comContentLabel;
@property (weak, nonatomic) IBOutlet UILabel *comNameLabel;
@property (weak, nonatomic) IBOutlet UIImageView *comIconImageView;
@property (weak, nonatomic) IBOutlet UILabel *specificationsLabel;

@property (weak, nonatomic) IBOutlet NSLayoutConstraint *bottomCons;

@end

@implementation SbenTableCell

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
    
    
    //表格行左侧的课程名称
    _classNameLabel = [UILabel new];
//        self.classNameLabel.frame = CGRectMake(0, 0, 80, 60);
//    self.classNameLabel.backgroundColor = [UIColor whiteColor];
//    self.classNameLabel.layer.cornerRadius = 0;
//    self.classNameLabel.layer.masksToBounds = YES;
//    self.classNameLabel.numberOfLines = 1;
//    self.classNameLabel.tag = i+1000;
    _classNameLabel.font = [UIFont systemFontOfSize:12];
    _classNameLabel.textAlignment = NSTextAlignmentCenter;


        //表格行右侧上面的时间
    _timeLabel = [UILabel new];
//        self.timeLabel.frame = CGRectMake(80, 0, [UIScreen mainScreen].bounds.size.width-80, 30);
//        self.timeLabel.backgroundColor = [UIColor whiteColor];
//        self.timeLabel.numberOfLines = 0;
        _timeLabel.font = [UIFont systemFontOfSize:12];
        _timeLabel.textAlignment = NSTextAlignmentLeft;



        //表格行右侧下面的课程内容
    _studyContentLabel = [UILabel new];
//    self.studyContentLabel.frame = CGRectMake(80, 30, [UIScreen mainScreen].bounds.size.width-80, 30);
//    self.studyContentLabel.backgroundColor = [UIColor whiteColor];
    _studyContentLabel.font = [UIFont systemFontOfSize:12];
    _studyContentLabel.textAlignment = NSTextAlignmentLeft;
    
    _studyContentLabel.lineBreakMode = NSLineBreakByTruncatingTail;
    _studyContentLabel.numberOfLines = 2;//显示的文字行数。如果cell高度不够2行高度，则只会显示一行


    [self.contentView  addSubview:_classNameLabel];
    [self.contentView  addSubview:_timeLabel];
    [self.contentView  addSubview:_studyContentLabel];

//    _classNameLabel.translatesAutoresizingMaskIntoConstraints = NO;
//    _timeLabel.translatesAutoresizingMaskIntoConstraints = NO;
//    _studyContentLabel.translatesAutoresizingMaskIntoConstraints = NO;
    
    
    UIView *superView = self.contentView;
    CGFloat margin = 10;
    
    _classNameLabel.sd_layout
    .widthIs(60)
    .heightEqualToWidth()
    .leftSpaceToView(superView, margin)
    .topSpaceToView(superView, margin);
    
    _timeLabel.sd_layout
    .topEqualToView(_classNameLabel)
    .leftSpaceToView(_classNameLabel, margin)
    .rightSpaceToView(superView, 80)
    .heightIs(26);
    
    _studyContentLabel.sd_layout
    .leftEqualToView(_timeLabel)
    .topEqualToView(_timeLabel)
    .bottomSpaceToView(superView, margin * 1.3)
    .heightIs(30)
    .rightSpaceToView(superView, margin);
}

#pragma mark - properties

- (void)setModel:(SbenCellModel *)model
{
    _model = model;
    
    self.iconImageView.image = [UIImage imageNamed:model.imageName];
    self.classNameLabel.text = model.className;
    self.timeLabel.text = model.time;
    self.studyContentLabel.text = model.studyContent;
}


#pragma mark - public actions

+ (CGFloat)fixedHeight
{
    return 70;
}

@end
