var obj = JSON.parse($response.body);

obj= {
  "status": "success",
  "message": "success",
  "code": 200,
  "data": {
    "show_pay": true,
    "userInfo": {
      "phone": null,
      "address": "",
      "time_updated": 1571639561,
      "config_item": "http://www.api.monkeyuni.net/data_app/user_info/json_config_item_1172032_2.zip",
      "users_id": 1172032,
      "email": "hiepkimcdtk55@gmail.com",
      "max_profile": 3,
      "name": ""
    },
    "is_submit": true,
    "update": {
      "status": "ignore",
      "id": 80,
      "title": "Bản "siêu cập nhật" chào hè 2018",
      "message": "Monkey Junior Summer Update đã chính thức được ra mắt tất cả ba mẹ. Chi tiết bản cập nhật bao gồm:
- Ra mắt ngôn ngữ Nga
- Thêm mới hơn 1500 bài học cho 4 ngôn ngữ tiếng Việt, tiếng Trung, tiếng Pháp và tiếng Tây Ban Nha
- Thêm mới 10 hoạt động tương tác bổ trợ cho việc dạy học
- Lưu giữ lại sticker ngay cả khi bị xóa mất ứng dụng.
Ba mẹ cùng nhanh tay cập nhật ứng dụng nhé!",
      "version_update": "23.3.0",
      "version_required": "0",
      "time_remind": 3,
      "url": ""
    },
    "notify": [
      {
        "id": 106,
        "title": "MONKEY STORIES VINH DỰ ĐẠT TOP 1 CHƯƠNG TRÌNH GIÁO DỤC ĐƯỢC TẢI VỀ NHIỀU NHẤT TẠI VIỆT NAM",
        "message": "Sau rất nhiều nỗ lực từ đội ngũ phát triển sản phẩm và sự giúp sức hết mình của các bố mẹ, chương trình học Monkey Stories đã chính thức đạt TOP 1 chương trình giáo dục được tải về nhiều nhất tại Việt Nam.
Nhân sự kiện đặc biệt này, Monkey Junior muốn mời bố mẹ cùng lắng nghe những chia sẻ của các bố mẹ đang cho con sử dụng chương trình học Monkey Stories tại đây.",
        "url": "http://bit.ly/Video-Trian",
        "created": 1528947895
      },
      {
        "id": 80,
        "title": "Bản "siêu cập nhật" chào hè 2018",
        "message": "Monkey Junior Summer Update đã chính thức được ra mắt tất cả ba mẹ. Chi tiết bản cập nhật bao gồm:
- Ra mắt ngôn ngữ Nga
- Thêm mới hơn 1500 bài học cho 4 ngôn ngữ tiếng Việt, tiếng Trung, tiếng Pháp và tiếng Tây Ban Nha
- Thêm mới 10 hoạt động tương tác bổ trợ cho việc dạy học
- Lưu giữ lại sticker ngay cả khi bị xóa mất ứng dụng.
Ba mẹ cùng nhanh tay cập nhật ứng dụng nhé!",
        "url": "",
        "created": 1527045225
      }
    ],
    "day_readed": "",
    "is_vn": true,
    "limit_seconds_offline": 259200,
    "purchased": {
      "product_list": [
      ],
      "is_active": true,
      "time_expire": 0,
      "pay_inapp": true,
      "is_free": true
    },
    "country_code": "vi-VN",
    "current_time": 1571640309,
    "is_show_ads_app": [
      40,
      50,
      51
    ]
  }
};

$done({body: JSON.stringify(obj)});

// Descriptions
