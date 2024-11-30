---
author: Thanh Tran
pubDatetime: 2024-11-29T23:22:00Z
modDatetime: 2024-11-30T11:06:22Z
title: Trải nghiệm lần đầu thi khoa học kĩ thuật
slug: thi-khkt
featured: true
draft: false
tags:
  - thi
  - khkt
  - khoa hoc
description: Trải nghiệm lần đầu cũng như lần cuối thi khoa học kĩ thuật bậc THPT và những vấn đề xung quanh
---

Cuộc thi khoa học kĩ thuật hàng năm được tổ chức để khuyến khích các học sinh tham gia nghiên cứu khoa học, tăng cường trao đổi văn hóa, giáo dục.

Tôi đã lỡ hẹn với cuộc thi từ năm lớp 11 khi thầy giáo gửi công văn về cuộc thi khi còn 4 ngày nữa là hết thời gian nộp. Đến năm lớp 12 thì cũng vậy, nhưng cũng may khi tôi có dự án đã thực hiện xong từ hè và tôi bắt đầu viết các tài liệu, hồ sơ cần thiết

# Giới thiệu về dự án của tôi
Khi tham gia trường hè MASSP, tôi đã có thêm những góc nhìn mới về AI, đặc biệt là LLM và bắt đầu tìm hiểu các kĩ thuật tối ưu hiệu năng, độ chính xác của chúng. Kĩ thuật khá phổ biến đó là sử dụng RAG (Retrieval Augmented Generation), có thể dịch tạm là: "tăng cường truy xuất thông tin cho mô hình". 
![image](../assets/khkt/khkt_rag_architec.gif)


### Vấn đề của các mô hình ngôn ngữ hiện tại
Có thể nói ngắn gọn: Những mô hình ngôn ngữ lớn được huấn luyện trên một tập dữ liệu khổng lồ (chatGPT được huấn luyện trên 45Tb dữ liệu), những dữ liệu này được lấy chủ yếu từ Internet.
Vi Nếu mô hình được đào tạo trên dữ liệu từ năm 2022 thì nếu hỏi những câu hỏi yêu cầu dữ liệu qua thời điểm đó, chúng sẽ không có thông tin và sẽ trả lời: 
![image](../assets/khkt/khkt_problem.png)


Một vấn đề khác đó là *hallucination - ảo giác*, các câu văn AI tạo ra đọc rất logic, mạch lạc nhưng thông tin chúng đưa ra không chính xác hoặc không có thật; nó như chúng ta viết văn nhưng lạc đề.

### Tăng cường hiệu suốt bằng cách cải thiện đầu vào
Kĩ thuật đó gọi là RAG như giới thiệu ở trên, chúng ta hãy cùng tìm hiểu một ví dụ:
> Trong hệ mặt trời, hành tinh nào có nhiều vệ tinh tự nhiên nhất ?

Tôi nhớ rằng đã đọc ở đâu đó là Sao Mộc có 88 vệ tinh tự nhiên và nhiều nhất trong hệ Mặt Trời
Nhưng có một số vấn đề với câu trả lời của tôi:
* Không có dẫn chứng nào về câu trả lời
* Dữ liệu có thể bị lỗi thời vì tôi đã đọc nó khoảng 6-8 năm trước

Vì vậy tôi đã lên trang của NASA để tìm và nhận được thông tin: Sao Thổ có 146 vệ tinh nhân tạo.

Và thực tế rằng, các nhà khoa học đang hàng ngày tìm kiếm được nhiều hơn nữa

Tôi có thêm một ví dụ nữa về ứng dụng RAG trong chatbot tư vấn điện điện thoại:
![image](../assets/khkt/khkt_rag.png)

> Chúng ta sẽ lấy dữ liệu về thông số của điện thoại cho LLMs để chúng đưa ra câu trả lời chính xác

### Agent và Multi Agent
Một tác nhân là một hệ thống sử dụng mô hình ngôn ngữ lớn (LLM) để quyết định luồng hoạt động của ứng dụng. Khi phát triển hệ thống, chúng ta có thể gặp phải những vấn đề phức tạp hơn, khó quản lí và mở rộng. Ví dụ:
-	Tác nhân sử dụng nhiều công cụ và đưa ra các quyết định kém về công cụ nào sẽ sử dụng bối cảnh (context) tiếp theo
-	Rất phức tạp để tác nhân duy nhất có thể theo dõi các quá trình
-	Cần nhiều hệ thống chuyên biệt cho nhiều tác vụ như (lập kế hoạch, nghiên cứu, giải toán, viết luận,..)

Để giải quyết những vấn đề này, chúng ta có thể cân nhắc việc chia ứng dụng thành nhiều tác nhân độc lập, nhỏ hơn và kết hợp với chúng thành một hệ thống đa tác nhân. Các tác nhân nhỏ độc lập này có thể đơn giản là gọi hàm, hoặc phức tác như tác nhân phản ứng (react agent)
Một số lợi ích của sử dụng hệ thống đa tác nhân(multi-agent system):
-	Mô đun hóa: các tác nhân riêng biệt sẽ giúp phát triển, thử nghiệm và bảo trì các hệ thống tác nhân dễ dàng hơn.
-	Chuyên môn hóa: các tác nhân chuyên biệt sẽ tập trung vào một lĩnh vực cụ thể, giúp tăng hiệu suất tổng thể của hệ thống


### Demo Ứng Dụng
Hướng Dẫn Sử Dụng Phần Mềm RAGapp
Để chạy phần mềm RAGapp, làm theo các bước dưới đây:
1. Khởi Chạy Docker Container
Chạy lệnh sau trong terminal để khởi động một Docker container với hình ảnh của RAGapp:
`docker run -p 8000:8000 thanhkt/rag`
2. Truy Cập Giao Diện Quản Trị
Sau khi container được khởi chạy, truy cập Giao diện Quản trị (Admin UI) tại địa chỉ:

![image](../assets/khkt/khkt_demo1.png)


![image](../assets/khkt/khkt_demo2.png)

![image](../assets/khkt/khkt_demo3.png)

