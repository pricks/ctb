//
//  GlobalDefines.h
//  ctb
//
//  Created by 封亚飞 on 2020/3/29.
//  Copyright © 2020 封亚飞. All rights reserved.
//

#ifndef GlobalDefines_h
#define GlobalDefines_h

#define SDColor(r, g, b, a) [UIColor colorWithRed:(r / 255.0) green:(g / 255.0) blue:(b / 255.0) alpha:a]
#define Global_tintColor [UIColor colorWithRed:0 green:(190 / 255.0) blue:(12 / 255.0) alpha:1]
#define Global_mainBackgroundColor SDColor(248, 248, 248, 1)
#define TimeLineCellHighlightedColor [UIColor colorWithRed:92/255.0 green:140/255.0 blue:193/255.0 alpha:1.0]

//全局背景色
#define DCBGColor RGB(245,245,245)

// 2.获得RGB颜色
#define RGBA(r, g, b, a)                    [UIColor colorWithRed:r/255.0f green:g/255.0f blue:b/255.0f alpha:a]
#define RGB(r, g, b)                        RGBA(r, g, b, 1.0f)

#define navigationBarColor RGB(33, 192, 174)
#define separaterColor RGB(200, 199, 204)


// 4.屏幕大小尺寸
#define screen_width [UIScreen mainScreen].bounds.size.width
#define screen_height [UIScreen mainScreen].bounds.size.height

#define kWidth           self.view.frame.size.width
#define kHeight          self.view.frame.size.height

#define kWeakSelf        __weak typeof(self) weakSelf = self


#endif
