import { StickyNav } from '@/components/sticky-nav';
import { Footer } from '@/components/footer';
import { MobileBottomCTA } from '@/components/mobile-bottom-cta';
import { ScrollReset } from '@/components/scroll-reset';
import { LanguageProvider } from '@/lib/language-context';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyVN() {
  return (
    <LanguageProvider defaultLang="vi">
      <main className="relative flex flex-col min-h-screen pt-[104px]">
        <ScrollReset />
        <StickyNav />

        <div className="flex-grow w-full max-w-[720px] mx-auto px-6 py-12">
          <Link
            href="/?lang=vi"
            className="inline-flex items-center text-sm transition-colors mb-8 text-white/70 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Trở về Trang chủ
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-dm-serif-display)]">
            Chính sách bảo mật
          </h1>

          <div className="prose prose-invert max-w-none space-y-6 text-white/80" style={{ lineHeight: 1.7 }}>
            <p><strong>Cập nhật lần cuối:</strong> Ngày 13 tháng 4 năm 2026</p>
            
            <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Chúng tôi là ai</h2>
            <p>Courtyard Pickle (sau đây gọi là “chúng tôi”, “của chúng tôi”) vận hành trang web <a href="https://courtyardpickledanang.com" className="text-lime hover:underline">courtyardpickledanang.com</a> (sau đây gọi là “Trang web”).</p>
            <p><strong>Địa chỉ đăng ký:</strong><br />27 Dương Thị Xuân Quý, Bắc Mỹ An, Ngũ Hành Sơn, Đà Nẵng 550000, Việt Nam</p>
            <p><strong>Liên hệ về quyền riêng tư:</strong><br />courtyard.picklecafe@gmail.com</p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Phạm vi áp dụng</h2>
            <p>Chính sách này giải thích dữ liệu được thu thập khi bạn truy cập Trang web, bởi ai, cơ sở pháp lý xử lý và quyền của bạn theo pháp luật Việt Nam hiện hành về bảo vệ dữ liệu cá nhân. Phiên bản tiếng Anh được cung cấp song song với phiên bản tiếng Việt đầy đủ này.</p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">3. Dữ liệu chúng tôi thu thập trực tiếp</h2>
            <p>Chúng tôi không thu thập trực tiếp bất kỳ dữ liệu cá nhân nào. Trang web không có tài khoản người dùng, biểu mẫu liên hệ, xử lý thanh toán hoặc cơ chế gửi dữ liệu nào.</p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">4. Dữ liệu được thu thập tự động bởi các nhà cung cấp hạ tầng</h2>
            <p>Các nhà cung cấp sau vận hành hạ tầng lưu trữ và mạng của Trang web. Họ tự động thu thập dữ liệu kỹ thuật giới hạn (địa chỉ IP, loại trình duyệt, dấu thời gian yêu cầu). Chúng tôi không kiểm soát, truy cập hoặc xử lý dữ liệu này.</p>
            <p><strong>Cơ sở pháp lý:</strong> Việc xử lý là cần thiết để thực hiện hợp đồng cung cấp dịch vụ trang web, theo quy định pháp luật Việt Nam hiện hành về bảo vệ dữ liệu cá nhân mà không cần đồng ý riêng.</p>
            
            <h3 className="text-lg font-semibold text-white mt-6 mb-3">4.1 Vercel (Lưu trữ)</h3>
            <p>Trang web được lưu trữ bởi Vercel, Inc. Vercel thu thập dữ liệu yêu cầu kỹ thuật để đảm bảo an ninh và hiệu suất.<br />Chính sách bảo mật của Vercel: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-lime hover:underline">https://vercel.com/legal/privacy-policy</a></p>
            <h3 className="text-lg font-semibold text-white mt-6 mb-3">4.2 Cloudflare (Tên miền và An ninh mạng)</h3>
            <p>Tên miền Trang web được quản lý qua Cloudflare, Inc., đơn vị xử lý lưu lượng mạng cho DNS và an ninh. Cloudflare có thể ghi siêu dữ liệu kết nối.<br />Chính sách bảo mật của Cloudflare: <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-lime hover:underline">https://www.cloudflare.com/privacypolicy/</a></p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">5. Công cụ phân tích và theo dõi</h2>
            <p><strong>Cơ sở pháp lý:</strong> Sự đồng ý rõ ràng của bạn theo pháp luật Việt Nam hiện hành về bảo vệ dữ liệu cá nhân.</p>
            <p>Các công cụ sau chỉ tải sau khi bạn đồng ý rõ ràng qua biểu ngữ cookie trên lần truy cập đầu tiên. Nếu từ chối, không công cụ nào hoạt động và không thu thập dữ liệu. Bạn có thể thay đổi sự đồng ý qua liên kết “Cài đặt cookie” ở chân trang.</p>
            
            <h3 className="text-lg font-semibold text-white mt-6 mb-3">5.1 Google Analytics 4 (GA4), qua Google Tag Manager</h3>
            <p>GA4 thu thập dữ liệu hành vi (trang truy cập, thời lượng phiên, loại thiết bị, vị trí xấp xỉ, thông tin trình duyệt). Dữ liệu được xử lý bởi Google LLC trên máy chủ ngoài Việt Nam.<br />Chính sách bảo mật của Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-lime hover:underline">https://policies.google.com/privacy</a></p>
            <h3 className="text-lg font-semibold text-white mt-6 mb-3">5.2 Microsoft Clarity</h3>
            <p>Microsoft Clarity ghi dữ liệu phiên ẩn danh (di chuyển chuột, nhấp chuột, hành vi cuộn) và có thể tạo bản ghi phiên. Dữ liệu được xử lý bởi Tập đoàn Microsoft trên máy chủ ngoài Việt Nam.<br />Chính sách quyền riêng tư của Microsoft: <a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer" className="text-lime hover:underline">https://privacy.microsoft.com/privacystatement</a></p>
            <h3 className="text-lg font-semibold text-white mt-6 mb-3">5.3 Google Search Console</h3>
            <p>Google Search Console cung cấp dữ liệu tổng hợp về cách Trang web hiển thị trong kết quả tìm kiếm. Công cụ này không chạy trong trình duyệt, không đặt cookie và không thu thập dữ liệu cá nhân từ phiên của bạn.</p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">6. Liên kết và dịch vụ bên thứ ba</h2>
            <p>Các liên kết và nút chuyển hướng đến nền tảng bên thứ ba. Chính sách Bảo mật này không áp dụng khi bạn rời Trang web.</p>
            <p>• <strong>Nền tảng đặt sân:</strong> Chuyển hướng đến trang đặt chỗ bên thứ ba. Chúng tôi không nhận dữ liệu.<br />• <strong>Facebook:</strong> Liên kết đến trang chính thức do Meta quản lý.<br />Chính sách quyền riêng tư của Meta: <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-lime hover:underline">https://www.facebook.com/privacy/policy/</a><br />• <strong>Số điện thoại:</strong> Mở ứng dụng quay số thiết bị. Không truyền dữ liệu cho chúng tôi.</p>
            <p>Chúng tôi không chịu trách nhiệm về hoạt động của bên thứ ba.</p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">7. Chuyển dữ liệu ra nước ngoài</h2>
            <p>Việc đồng ý sử dụng công cụ phân tích đồng nghĩa với việc đồng ý chuyển và xử lý dữ liệu trên máy chủ ngoài Việt Nam bởi Google LLC (Hoa Kỳ) và Tập đoàn Microsoft (Hoa Kỳ). Vercel và Cloudflare có thể xử lý dữ liệu kết nối ngoài Việt Nam trong hoạt động thông thường.</p>
            <p>Việc chuyển dữ liệu được thực hiện theo biện pháp bảo vệ tiêu chuẩn của từng nhà cung cấp. Chúng tôi duy trì hồ sơ đánh giá tác động chuyển dữ liệu ra nước ngoài theo quy định pháp luật Việt Nam hiện hành về bảo vệ dữ liệu cá nhân. Bản sao hồ sơ có sẵn theo yêu cầu tại courtyard.picklecafe@gmail.com.</p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">8. Quyền của bạn theo pháp luật Việt Nam về bảo vệ dữ liệu cá nhân</h2>
            <p>Bạn có quyền:</p>
            <p>• Được thông báo về việc xử lý dữ liệu cá nhân<br />• Truy cập dữ liệu cá nhân của mình<br />• Sửa chữa dữ liệu cá nhân không chính xác<br />• Xóa dữ liệu cá nhân<br />• Hạn chế xử lý dữ liệu cá nhân<br />• Phản đối việc xử lý dữ liệu cá nhân<br />• Rút lại sự đồng ý bất kỳ lúc nào (qua liên kết cài đặt cookie ở chân trang)<br />• Yêu cầu cung cấp dữ liệu cá nhân<br />• Khiếu nại, tố cáo hoặc khởi kiện theo quy định pháp luật<br />• Yêu cầu bồi thường thiệt hại do vi phạm</p>
            <p>Liên hệ courtyard.picklecafe@gmail.com để thực hiện quyền liên quan đến nhà cung cấp phân tích. Chúng tôi sẽ phối hợp hỗ trợ.</p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">9. An ninh dữ liệu</h2>
            <p>Mặc dù chúng tôi không lưu trữ trực tiếp dữ liệu cá nhân, chúng tôi yêu cầu các nhà cung cấp dịch vụ áp dụng các biện pháp kỹ thuật và tổ chức (mã hóa truyền tải, kiểm soát truy cập, kiểm toán định kỳ) theo pháp luật Việt Nam hiện hành về bảo vệ dữ liệu cá nhân.</p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">10. Thời gian lưu trữ dữ liệu</h2>
            <p>Chúng tôi không lưu trữ dữ liệu cá nhân. Thời gian lưu trữ của Vercel, Cloudflare, Google và Microsoft được quy định riêng theo chính sách bảo mật của họ.</p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">11. Quyền riêng tư của trẻ em</h2>
            <p>Trang web không hướng đến trẻ em dưới 16 tuổi. Chúng tôi không cố ý thu thập dữ liệu cá nhân từ trẻ vị thành niên. Nếu phát hiện dữ liệu của trẻ dưới 16 tuổi được thu thập mà không có sự đồng ý xác minh của cha mẹ hoặc người giám hộ, chúng tôi sẽ xóa ngay lập tức và thông báo cho cha mẹ hoặc người giám hộ nếu khả thi.</p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">12. Thay đổi Chính sách này</h2>
            <p>Chúng tôi có thể cập nhật chính sách để phù hợp với công cụ, yêu cầu pháp lý hoặc chức năng mới. Ngày “Cập nhật lần cuối” sẽ thay đổi. Thay đổi quan trọng sẽ được thông báo nổi bật trên Trang web. Khi thay đổi ảnh hưởng đến xử lý dựa trên đồng ý, chúng tôi cung cấp cơ hội xem xét và gia hạn đồng ý. Việc tiếp tục sử dụng sau thông báo cấu thành chấp nhận nếu pháp luật cho phép.</p>

            <h2 className="text-xl font-bold text-white mt-8 mb-4">13. Liên hệ</h2>
            <p><strong>Courtyard Pickle</strong><br />27 Dương Thị Xuân Quý, Bắc Mỹ An, Ngũ Hành Sơn, Đà Nẵng 550000, Việt Nam<br />Email: courtyard.picklecafe@gmail.com<br />Trang web: courtyardpickledanang.com</p>
          </div>
        </div>

        <Footer />
        <MobileBottomCTA />
      </main>
    </LanguageProvider>
  );
}
