import type { CSSProperties, ReactNode } from 'react';

type SectionProps = {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

function Section({ className = '', style, children }: SectionProps) {
  return (
    <section className={`relative w-full overflow-hidden ${className}`} style={style}>
      {children}
    </section>
  );
}

type ShellProps = {
  children: ReactNode;
  className?: string;
};

function Shell({ children, className = '' }: ShellProps) {
  return <div className={`h-full mx-auto relative max-w-[1200px] ${className}`}>{children}</div>;
}

type TagProps = {
  text: string;
  className?: string;
};

function Tag({ text, className = '' }: TagProps) {
  return (
    <div className={className}>
      <div className="size-full relative">
        <div className="absolute inset-0 bg-[rgb(41,_26,_57)] border border-[rgb(141,_106,_168)] rounded-[3.125rem]" />
        <div className="absolute w-4 h-4 left-[22px] top-[9.5px] bg-white" />
        <div className="absolute left-11 top-[6.5px] right-[16px] h-6">
          <h5 className="text-white text-[16px] leading-[24px] font-bold">
            <span className="font-normal">{text}</span>
          </h5>
        </div>
      </div>
    </div>
  );
}

type OutlineTagProps = TagProps;

function OutlineTag({ text, className = '' }: OutlineTagProps) {
  return (
    <div className={className}>
      <div className="size-full relative">
        <div className="absolute inset-0 bg-[rgb(47,_41,_56)] border border-[rgb(185,_185,_185)] rounded-[3.125rem]" />
        <div className="absolute w-4 h-4 left-[22px] top-[9.5px] bg-white" />
        <div className="absolute left-11 top-[6.5px] right-[16px] h-6">
          <h5 className="text-white text-[16px] leading-[24px] font-bold">
            <span className="font-normal">{text}</span>
          </h5>
        </div>
      </div>
    </div>
  );
}

type ImageFrameProps = {
  src: string;
  className: string;
  overlayClassName?: string;
  imageClassName?: string;
  style?: CSSProperties;
};

function ImageFrame({ src, className, overlayClassName = '', imageClassName = '', style }: ImageFrameProps) {
  return (
    <div className={className} style={style}>
      <div className="size-full overflow-hidden absolute">
        <div
          role="img"
          className={`bg-origin-content bg-center bg-no-repeat bg-cover ml-auto mr-auto absolute left-0 top-0 ${imageClassName}`}
          style={{ backgroundImage: `url("${src}")` }}
        />
        {overlayClassName ? <div className={overlayClassName} /> : null}
      </div>
    </div>
  );
}

type RowCardProps = {
  text: string;
  className?: string;
  iconClassName?: string;
};

function RowCard({ text, className = '', iconClassName = 'w-[23px] h-[23px]' }: RowCardProps) {
  return (
    <div className={`size-full relative ${className}`}>
      <div className="absolute w-[570px] h-[71px] left-0 top-0 bg-[rgb(47,_41,_56)] border border-[rgb(185,_185,_185)] rounded-[0.3125rem]" />
      <div className="absolute w-[41px] h-[41px] left-[17px] top-[16.5px] bg-[rgb(95,_70,_116)] rounded-[3.125rem]" />
      <div className={`absolute left-[26px] top-[25.5px] bg-white ${iconClassName}`} />
      <div className="absolute w-[457px] h-6 left-[73px] top-[25.5px]">
        <h5 className="text-white text-[16px] leading-[24px] font-bold">
          <span className="font-normal">{text}</span>
        </h5>
      </div>
    </div>
  );
}

type FeatureCardProps = {
  title: string;
  text: string;
};

function FeatureCard({ title, text }: FeatureCardProps) {
  return (
    <div className="absolute w-[264px] h-[382px] top-[364px]">
      <div className="size-full relative">
        <div className="absolute w-[264px] h-[348px] left-0 top-[33.5px] bg-[rgb(57,_47,_70)] border border-[rgb(141,_106,_168)] rounded-[0.3125rem]" />
        <div className="absolute w-[67px] h-[67px] left-[98.5px] top-0">
          <div className="absolute inset-0 bg-[rgb(57,_47,_70)] border border-[rgb(233,_204,_255)] rounded-[3.125rem]" />
          <div className="absolute w-7 h-[29px] left-[19.5px] top-[19px] bg-[rgb(255,_193,_7)]" />
        </div>
        <div className="absolute w-[225px] h-[54px] left-[19.5px] top-[102px]">
          <h5 className="text-white text-[18px] leading-[27px] font-bold text-center">{title}</h5>
        </div>
        <div className="absolute w-[226px] h-[67.5px] left-[19.5px] top-44">
          <h5 className="text-white text-[15px] leading-[22.5px] font-bold text-center">
            <span className="font-normal">{text}</span>
          </h5>
        </div>
      </div>
    </div>
  );
}

function CTAButton({ text, tone = 'gold' }: { text: string; tone?: 'gold' | 'purple' | 'dark' }) {
  const toneClass =
    tone === 'gold'
      ? 'bg-[rgb(255,_193,_7)] text-[rgb(95,_70,_116)]'
      : tone === 'purple'
        ? 'bg-[rgb(141,_106,_168)] text-white'
        : 'bg-[rgb(54,_46,_65)] text-white border border-gray-200';

  return (
    <div className={`items-center flex font-bold size-full justify-center text-center shadow-[rgba(0,0,0,0.25)_0px_4px_4px_0px] text-[20px] leading-[30px] rounded-[0.625rem] ${toneClass}`}>
      <div className="text-center align-middle w-full">{text}</div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="absolute w-40 h-[76px] left-0 top-0">
      <div className="size-full relative">
        <div className="absolute inset-0 bg-[rgb(47,_41,_56)] border border-[rgb(185,_185,_185)] rounded-[0.625rem]" />
        <div className="absolute w-5 h-5 left-[22px] top-[9.5px] bg-[rgb(255,_193,_7)]" />
        <div className="absolute left-[55px] top-[10.5px] right-[16px] h-[22.5px]">
          <h5 className="text-white text-[15px] leading-[22.5px] font-bold text-left">
            <span className="font-normal">{label}</span>
          </h5>
        </div>
        <div className="absolute w-40 h-6 left-0 top-[44.5px]">
          <h5 className="text-white text-[16px] leading-[24px] font-bold text-center">{value}</h5>
        </div>
      </div>
    </div>
  );
}

function SignupField({ placeholder, type }: { placeholder: string; type: string }) {
  return (
    <div className="border size-full overflow-hidden border-[rgb(217,_217,_217)] rounded-md">
      <input
        type={type}
        aria-label={placeholder}
        placeholder={placeholder}
        className="inline-block size-full overflow-clip bg-white pt-0 pr-0 pb-0 pl-[10px]"
        style={{ textDecoration: 'none' }}
      />
    </div>
  );
}

function HeroSection() {
  return (
    <Section className="h-[987px]">
      <div className="absolute inset-0 bg-origin-content bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F5aba0c4c521329acdb5d518ab4b5fe4d7a524eba.jpg?generation=1780941584920565&alt=media")' }} />
      <div className="absolute inset-0 bg-black/75" />
      <Shell>
        <div className="absolute w-[450px] h-9 left-0 top-8"><Tag text="Xu hướng kinh doanh 2026 • Đá quý kết hợp Huyền học" /></div>
        <div className="absolute w-[551px] h-[420px] left-0 top-[110px]"><h3 className="text-white text-[56px] leading-[84px] font-bold text-left">Trở thành đại lý &nbsp;<span className="text-[rgb(255,_193,_7)]">Phúc Ngọc Bảo</span>&nbsp; và học miễn phí kiến thức về huyền học, &nbsp; năng lượng đá quý</h3></div>
        <div className="absolute w-[485px] h-[81px] left-0 top-[538.5px]"><h5 className="text-white text-[18px] leading-[27px] font-bold text-left"><span className="font-normal">Khóa học 0đ giúp bạn hiểu cách luận lá số, thiết kế đá đúng mệnh và mở ra một hướng kinh doanh cá nhân hóa, ít cạnh tranh, lợi nhuận tốt.</span></h5></div>

        <div className="absolute w-[520px] h-[529px] left-[680px] top-[50px]"><div className="border size-full overflow-hidden absolute border-gray-200 rounded-[0.3125rem]"><div role="img" className="bg-origin-content bg-center bg-no-repeat bg-cover ml-auto mr-auto absolute w-[518px] h-[710.593px] left-0 top-0" style={{ backgroundImage: 'url("https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fc1f9fd5c4c264fc89b54d04bad14839ec4be62ff.jpg?generation=1780941584927750&alt=media")' }} /></div></div>
        <div className="absolute w-[253px] h-[230px] left-[680px] top-[596px]"><div className="border size-full overflow-hidden absolute border-gray-200 rounded-[0.3125rem]"><div role="img" className="bg-origin-content bg-center bg-no-repeat bg-cover ml-auto mr-auto absolute w-[251px] h-[311.087px] left-0 top-[-53px]" style={{ backgroundImage: 'url("https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F3b2434361b7047ec8908412cc03c7e5d1c23764b.jpg?generation=1780941584909227&alt=media")' }} /></div></div>
        <div className="absolute w-[253px] h-[230px] left-[948px] top-[596px]"><div className="border size-full overflow-hidden absolute border-gray-200 rounded-[0.3125rem]"><div role="img" className="bg-origin-content bg-center bg-no-repeat bg-cover ml-auto mr-auto absolute w-[251px] h-[311.129px] left-0 top-[-83.1293px]" style={{ backgroundImage: 'url("https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fe2dcd780a091bdc6a388eff08da1599ce9f7b1ee.jpg?generation=1780941584902486&alt=media")' }} /></div></div>
        <div className="absolute w-[239px] h-9 left-0 top-[652px]"><OutlineTag text="Đá quý ứng dụng thực tế" /></div>
        <div className="absolute w-[275px] h-9 left-[267px] top-[652px]"><OutlineTag text="Nhìn rõ chất đá và năng lượng" /></div>
        <div className="absolute w-[275px] h-9 left-0 top-[705px]"><OutlineTag text="Tư vấn cá nhân hóa theo lá số" /></div>
        <div className="absolute w-[269px] h-[54px] left-px top-[817.5px]"><CTAButton text="Đăng ký miễn phí >" tone="gold" /></div>
        <div className="absolute w-[269px] h-[54px] left-[297px] top-[817.5px]"><CTAButton text="Xem nội dung khóa học" tone="dark" /></div>
        <div className="absolute w-[485px] h-[51px] left-[45px] top-[889px]"><h5 className="text-white text-[17px] leading-[25.5px] font-bold text-center"><span className="font-normal">Chỉ 90 phút học thực chiến có thể thay đổi hoàn toàn cách bạn kiếm tiền trong năm 2026.</span></h5></div>

        <div className="absolute w-[520px] h-[76px] left-[680px] top-[864px]"><div className="size-full relative"><div className="absolute w-40 h-[76px] left-0 top-0"><StatCard label="Thời gian" value="20h00 – 21h30" /></div><div className="absolute w-40 h-[76px] left-[180px] top-0"><StatCard label="Ngày học" value="11/05/2026" /></div><div className="absolute w-40 h-[76px] left-[360px] top-0"><StatCard label="Hình thức" value="Học online Zoom" /></div></div></div>
      </Shell>
    </Section>
  );
}

function PainSection() {
  const items = ['Bạn rất muốn kiếm tiền nhưng chưa tìm được xu hướng vàng', 'Rất muốn kinh doanh nhưng không biết nên kinh doanh gì', 'Làm cái gì cũng thấy người ta đã làm trước', 'Bán cái gì cũng thấy cạnh tranh khốc liệt', 'Nhảy hết ngành này đến ngành khác nhưng vẫn không ăn thua'];

  return (
    <Section className="h-[630px] bg-[rgb(39,_25,_56)]">
      <Shell>
        <div className="absolute w-[275px] h-9 left-0 top-[47px]"><Tag text="Bạn không thất bại vì kém giỏi" /></div>
        <div className="absolute w-[485px] h-[108px] left-0 top-[115px]"><h3 className="text-white text-[36px] leading-[54px] font-bold text-left">Thị trường hiện tại không còn chỗ cho người bán đại trà</h3></div>
        <div className="absolute w-[588px] h-[81px] left-0 top-[234px]"><h5 className="text-white text-[18px] leading-[27px] font-bold text-left"><span className="font-normal">Ai cũng bán, ai cũng giống nhau, ai cũng đua giá. Người thắng trong 2026 là người có chuyên môn riêng và đưa ra giải pháp cá nhân hóa thực sự cho khách hàng</span></h5></div>
        <div className="absolute w-[590px] h-[215px] left-0 top-[354.5px]"><div className="size-full overflow-hidden absolute"><div role="img" className="bg-origin-content bg-center bg-no-repeat bg-cover ml-auto mr-auto absolute w-[590px] h-[309.75px] left-0 top-0" style={{ backgroundImage: 'url("https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F8f18be4b66c99cdcdf95213de5514c63680cc091.jpg?generation=1780941584918943&alt=media")' }} /><div className="size-full pointer-events-none absolute left-0 top-0 bg-[rgba(39,_25,_56,_0.06)]/6" /></div></div>
        <div className="absolute w-[570px] h-[71px] left-[630px] top-[65.5px]"><RowCard text={items[0]} /></div>
        <div className="absolute w-[570px] h-[71px] left-[630px] top-[174px]"><RowCard text={items[1]} /></div>
        <div className="absolute w-[570px] h-[71px] left-[630px] top-[282px]"><RowCard text={items[2]} iconClassName="w-6 h-[23px]" /></div>
        <div className="absolute w-[570px] h-[71px] left-[630px] top-[391px]"><RowCard text={items[3]} iconClassName="w-6 h-[23px]" /></div>
        <div className="absolute w-[570px] h-[71px] left-[630px] top-[498.5px]"><RowCard text={items[4]} iconClassName="w-6 h-[23px]" /></div>
      </Shell>
    </Section>
  );
}

function OpportunitySection() {
  const cards = [
    ['Ít cạnh tranh trực tiếp &nbsp; Phát triển bền vững &nbsp;', 'Ngách chuyên môn riêng, không phải cuộc đua giá đại trà, xây thương hiệu có chiều sâu hơn.'],
    ['Tăng giá trị đơn hàng &nbsp; bằng tư vấn cá nhân hóa &nbsp;', 'Tăng giá trị bằng tư vấn cá nhân hóa thay vì chỉ bán sản phẩm'],
    ['Khách hàng dễ ra quyết định mua hàng &nbsp;', 'Khi khách hiểu đá được chọn cho chính họ, niềm tin tăng mạnh.'],
    ['Dễ tạo dấu ấn thương hiệu cá nhân nổi bật &nbsp;', 'Mỗi người có lá số và nhu cầu năng lượng khác nhau.'],
  ] as const;

  const images = [
    'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fd19a9f856ca43831bc5c1eb7e65b301823e8092b.jpg?generation=1780941584917105&alt=media',
    'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F1c07eb3bbce4b9e06bf60c6da867f01cb50799d2.jpeg?generation=1780941584913005&alt=media',
    'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fa3d2a4a2e5203e966584515c2e79feec6d78734b.jpg?generation=1780941584922923&alt=media',
    'https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F49294dad69c162aaf80979bc97879127b2ddde73.jpg?generation=1780941584922387&alt=media',
  ];

  return (
    <Section className="h-[893px]" style={{ backgroundImage: 'linear-gradient(rgb(39, 25, 56) 0%, rgb(95, 70, 116) 100%)' }}>
      <Shell>
        <div className="absolute w-[275px] h-9 left-[462.5px] top-[57px]"><Tag text="Cơ hội mới cho 2026" /></div>
        <div className="absolute w-[909px] h-[108px] left-[145.5px] top-[116px]"><h3 className="text-white text-[36px] leading-[54px] font-bold text-center uppercase">Không phải bán đá phong thủy đại trà &nbsp; mà là <span className="text-[rgb(236,_213,_255)]">&quot;thiết kế đá quý theo lá số cá nhân&quot;</span></h3></div>
        <div className="absolute w-[687px] h-[54px] left-[256.5px] top-[241px]"><h5 className="text-white text-[18px] leading-[27px] font-bold text-center"><span className="font-normal">Đây là ngách kinh doanh kết hợp giữa giá trị sản phẩm, tư vấn cá nhân hóa và trải nghiệm chuyên sâu, tạo ra lợi thế khác biệt rất rõ trên thị trường.</span></h5></div>

        {cards.map(([title, text], index) => (
          <div key={title} className={`absolute w-[264px] h-[382px] ${index === 0 ? 'left-0' : index === 1 ? 'left-[312px]' : index === 2 ? 'left-[624px]' : 'left-[936px]'}`}>
            <FeatureCard title={title} text={text} />
          </div>
        ))}

        {images.map((src, index) => (
          <div key={src} className={`absolute w-[262px] h-[118px] top-[626.5px] ${index === 0 ? 'left-0' : index === 1 ? 'left-[312.5px]' : index === 2 ? 'left-[625px]' : 'left-[937px]'}`}>
            <div className="size-full overflow-hidden absolute rounded-bl-[0.3125rem] rounded-br-[0.3125rem]">
              <div role="img" className="bg-origin-content bg-center bg-no-repeat bg-cover ml-auto mr-auto absolute left-0" style={{ backgroundImage: `url("${src}")`, width: index === 2 ? '271.081px' : '261px', height: index === 2 ? '118px' : '160px', top: index === 0 ? '-36px' : index === 1 ? '-28.7733px' : index === 2 ? '0' : '-29px', left: index === 1 ? '0.682493px' : index === 2 ? '-4px' : index === 3 ? '0.25641px' : '0' }} />
              <div className="size-full pointer-events-none absolute left-0 top-0 bg-[rgba(39,_25,_56,_0.67)]/67 rounded-bl-[0.3125rem] rounded-br-[0.3125rem]" />
            </div>
          </div>
        ))}

        <div className="absolute w-[654px] h-[31px] left-[273px] top-[800px]"><CTAButton text="Đây là lý do Ngọc Phúc Bảo ra đời khoá học này" tone="purple" /></div>
        <div className="absolute w-[31px] h-[31px] left-[584.5px] top-[845px] bg-[rgb(236,_213,_255)] rotate-90" />
      </Shell>
    </Section>
  );
}

function CourseSection() {
  const lessons = ['Cách đọc lá số để biết một người thiếu – dư năng lượng gì', 'Cách chọn và thiết kế đá phong thuỷ đúng với từng cá nhân', 'Cách biến kiến thức này thành dịch vụ có giá trị cao', 'Cách bắt đầu một hướng kinh doanh mới – ít cạnh tranh – lợi nhuận tốt'];

  return (
    <Section className="h-[1836px]" style={{ backgroundImage: 'linear-gradient(rgb(95, 70, 116) 0%, rgb(39, 25, 56) 100%)' }}>
      <Shell>
        <div className="absolute w-[1198px] h-[419px] left-[2.5px] top-[1362.5px]">
          <div className="size-full relative">
            <div className="absolute w-[1198px] h-[419px] left-0 top-0 bg-[rgb(39,_25,_56)] border border-[rgb(236,_213,_255)] rounded-[0.625rem]" />
            <div className="absolute w-[458px] h-[60px] left-[370px] top-[334.5px]"><CTAButton text="Đăng ký miễn phí >" tone="purple" /></div>
            <div className="absolute w-[225px] h-[126px] left-[210px] top-[164px]"><div className="absolute w-[62px] h-[62px] left-[81.5px] top-0 bg-[rgb(255,_193,_7)]" /><div className="absolute w-[225px] h-[45px] left-0 top-[81px]"><h5 className="text-white text-[15px] leading-[22.5px] font-bold text-center"><span className="font-normal">Không cần vốn lớn &nbsp; Đầu tư nhiều &nbsp;</span></h5></div></div>
            <div className="absolute w-[190px] h-[126px] left-[496px] top-[164px]"><div className="absolute w-[62px] h-[62px] left-16 top-0 bg-[rgb(255,_193,_7)]" /><div className="absolute w-[190px] h-[45px] left-0 top-[81px]"><h5 className="text-white text-[15px] leading-[22.5px] font-bold text-center"><span className="font-normal">Không cần kinh nghiệm trước đó &nbsp;</span></h5></div></div>
            <div className="absolute w-[225px] h-[129px] left-[764px] top-[164px]"><div className="absolute w-[62px] h-[62px] left-[81.5px] top-0 bg-[rgb(255,_193,_7)]" /><div className="absolute w-[225px] h-12 left-0 top-[81px]"><h5 className="text-white text-[16px] leading-[24px] font-bold text-center"><span className="font-normal">Chỉ cần bạn sẵn sàng học một kỹ năng có thể “ra tiền” &nbsp;</span></h5></div></div>
            <div className="absolute w-[733px] h-[117px] left-[232.5px] top-[22.5px]"><h3 className="text-white text-[26px] leading-[39px] font-bold text-center"><span className="font-normal">Đây là buổi “mở lối” sẽ giúp bạn nhìn ra &nbsp;</span><span className="text-[rgb(236,_213,_255)]">&nbsp;Một ngành tưởng như “tâm linh”… &nbsp; Nhưng lại là cơ hội kinh doanh cực kỳ thực tế và bền vững</span></h3></div>
          </div>
        </div>

        <div className="absolute w-[520px] h-[660px] left-[677px] top-[78px] border border-gray-200 rounded-[0.3125rem] overflow-hidden"><div role="img" className="bg-origin-content bg-center bg-no-repeat bg-cover ml-auto mr-auto absolute w-[532.814px] h-[710.593px] left-0 top-0" style={{ backgroundImage: 'url("https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F8c6148f9680761e66990f76f4654c8f4a36e81c5.jpg?generation=1780941584906209&alt=media")' }} /></div>
        <div className="absolute w-[909px] h-[152px] left-0 top-[78px]"><div className="absolute w-[197px] h-[35px] left-0 top-0"><OutlineTag text="Khóa học 0đ" className="absolute inset-0" /></div><div className="absolute w-[909px] h-[52.5px] left-0 top-[54px]"><h3 className="text-white text-[35px] leading-[52.5px] font-bold uppercase">Luận lá số – Thiết kế đá đúng mệnh</h3></div><div className="absolute w-[687px] h-[25.5px] left-0 top-[126px]"><h5 className="text-white text-[17px] leading-[25.5px] font-bold"><span className="font-normal">Chỉ 90 phút học thực chiến có thể thay đổi hoàn toàn cách bạn kiếm tiền</span></h5></div></div>
        <div className="absolute w-[570px] h-[445px] left-0 top-[293.5px]"><div className="absolute w-[570px] h-[71px] left-0 top-0"><RowCard text={lessons[0]} /></div><div className="absolute w-[570px] h-[71px] left-0 top-[124.5px]"><RowCard text={lessons[1]} /></div><div className="absolute w-[570px] h-[71px] left-0 top-[249px]"><RowCard text={lessons[2]} /></div><div className="absolute w-[570px] h-[71px] left-0 top-[373.5px]"><RowCard text={lessons[3]} iconClassName="w-[23px] h-[23px]" /></div></div>
        <div className="absolute w-[393px] h-[562px] left-0 top-[779.5px]"><div className="size-full overflow-hidden absolute"><div role="img" className="bg-origin-content bg-center bg-no-repeat bg-cover ml-auto mr-auto absolute w-[393px] h-[562.208px] left-0 top-0" style={{ backgroundImage: 'url("https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2Fdc1bddc775055a6e27eb3631901627b7a9eb541c.jpg?generation=1780941585070626&alt=media")' }} /></div></div>
        <div className="absolute w-[393px] h-[562px] left-[404px] top-[779.5px]"><div className="size-full overflow-hidden absolute"><div role="img" className="bg-origin-content bg-center bg-no-repeat bg-cover ml-auto mr-auto absolute w-[393.491px] h-[562px] left-0 top-0" style={{ backgroundImage: 'url("https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F258bf25e1a385e1ce9e99f55bc55787220e607ee.jpg?generation=1780941585072222&alt=media")' }} /></div></div>
        <div className="absolute w-[393px] h-[562px] left-[807.5px] top-[779.5px]"><div className="size-full overflow-hidden absolute"><div role="img" className="bg-origin-content bg-center bg-no-repeat bg-cover ml-auto mr-auto absolute w-[396.706px] h-[562px] left-0 top-0" style={{ backgroundImage: 'url("https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F7858a62d33feb0421a1167d2775770ef4cbf4b9b.jpg?generation=1780941585225257&alt=media")' }} /></div></div>
      </Shell>
    </Section>
  );
}

function SignupSection() {
  return (
    <Section className="h-[974px]" style={{ backgroundImage: 'linear-gradient(rgb(39, 25, 56) 0%, rgb(0, 0, 0) 100%)' }}>
      <Shell>
        <div className="absolute w-[739px] h-[139.5px] left-[228.5px] top-[25.5px]"><h3 className="text-[rgb(255,_193,_7)] text-[31px] leading-[46.5px] font-bold text-center">Đừng để bản thân phải hối tiếc vì đã bỏ lỡ &nbsp; Một xu hướng kinh doanh có thể thay đổi hướng đi tài chính của bạn trong 2026 &nbsp;</h3></div>
        <div className="absolute w-[572px] h-[674px] left-0 top-[211px]"><div className="border size-full overflow-hidden absolute rounded-br-[1.875rem] border-[rgb(236,_213,_255)] rounded-tl-[1.875rem]"><div role="img" className="bg-origin-content bg-center bg-no-repeat bg-cover ml-auto mr-auto absolute w-[570px] h-[713.383px] left-0 top-0" style={{ backgroundImage: 'url("https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F770a8c53fa76d6ec95e5c0e9ad85611c671ce152.jpg?generation=1780941585098291&alt=media")' }} /><div className="size-full pointer-events-none absolute left-0 top-0 bg-black/68 rounded-br-[1.875rem] rounded-tl-[1.875rem]" /></div><div className="absolute w-[275px] h-9 left-[25.5px] top-[25px]"><Tag text="KHÓA HỌC 0 ĐỒNG MIỄN PHÍ" /></div><div className="absolute w-[504px] h-[114px] left-[34px] top-[95.5px]"><h3 className="text-[rgb(233,_204,_255)] text-[38px] leading-[57px] font-bold text-center uppercase">Luận lá số &nbsp; Thiết kế đá đúng mệnh &nbsp;</h3></div><div className="absolute w-[231px] h-[27px] left-[34px] top-[243.5px]"><h5 className="text-white text-[18px] leading-[27px] font-bold text-left"><span className="font-normal">Thông tin khóa học:</span></h5></div><div className="absolute w-[520px] h-[76px] left-[25.5px] top-[289px]"><StatCard label="Thời gian" value="20h00 – 21h30" /><div className="absolute left-[180px] top-0"><StatCard label="Ngày học" value="11/05/2026" /></div><div className="absolute left-[360px] top-0"><StatCard label="Hình thức" value="Học online Zoom" /></div></div></div>
        <div className="absolute w-[575px] h-[102px] left-[601px] top-[242.5px]"><h3 className="text-[rgb(236,_213,_255)] text-[34px] leading-[51px] font-bold text-center uppercase">Xu hướng kinh doanh 2026 &nbsp; “Đá quý kết hợp Huyền học” &nbsp;</h3></div>
        <div className="absolute w-[236px] left-[758.5px] top-[344.5px]"><div className="w-full pt-2 pr-0 pb-2 pl-0"><div className="border-[rgb(83,_96,_119)] border-t-[4px]" /></div></div>
        <div className="absolute w-[575px] h-[476px] left-[601px] top-[401px]"><div className="size-full relative"><div className="absolute w-[575px] h-[40.5px] left-0 top-0"><h3 className="text-white text-[27px] leading-[40.5px] font-bold text-center">Đăng Ký Tham Gia Ngay &nbsp;</h3></div><div className="absolute w-[429px] h-[408px] left-[82px] top-[68px] bg-[rgb(95,_70,_116)] rounded-[0.625rem]" /><div className="absolute w-4 h-4 left-[113.5px] top-[91px] bg-white" /><div className="absolute w-[304px] h-6 left-[135.5px] top-[88px]"><h5 className="text-white text-[16px] leading-[24px] font-bold text-left"><span className="font-normal">Để lại thông tin đăng ký dưới đây</span></h5></div><div className="absolute w-[382px] h-[278px] left-[105.5px] top-[138px]"><form className="size-full text-[13px] leading-[19.5px] rounded-md"><div className="absolute w-[381px] h-[55px] left-0 top-0"><SignupField placeholder="Họ tên" type="text" /></div><div className="absolute w-[381px] h-[55px] left-0 top-[67px]"><SignupField placeholder="Số điện thoại" type="tel" /></div><div className="absolute w-[382px] h-[54px] left-0 top-56"><div className="items-center flex size-full justify-center text-center text-white text-[24px] leading-[36px] rounded-md" style={{ backgroundImage: 'linear-gradient(rgb(255, 106, 0) 0%, rgb(238, 9, 121) 100%)' }}><div className="text-center align-middle w-full"><span className="font-bold text-center">Đăng ký miễn phí 0 đồng</span></div></div></div><div className="absolute w-[382px] h-[55px] left-0 top-[132px]"><SignupField placeholder="Email" type="email" /></div></form></div></div></div>
        <a className="block fixed w-[76px] h-20 left-[5px] bottom-[5px] z-[10]"><div className="size-full overflow-hidden absolute"><div role="img" className="bg-origin-content bg-center bg-no-repeat bg-cover ml-auto mr-auto absolute w-[121.425px] h-[120.87px] left-[-22.7126px] top-[-22.6087px]" style={{ backgroundImage: 'url("https://storage.googleapis.com/download/storage/v1/b/prd-storytodesign.appspot.com/o/h2d-ext-asset%2F25c5a864b8fd1c85c17c0ef56496fbe85bd82b32.png?generation=1780941585095757&alt=media")' }} /></div></a>
      </Shell>
    </Section>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen text-black text-[12px] leading-[18px]" style={{ fontFamily: 'Roboto, sans-serif', fontFeatureSettings: '"tnum"', textDecoration: 'none' }}>
      <div className="bg-white" style={{ fontFeatureSettings: '"tnum"' }}>
        <HeroSection />
        <PainSection />
        <OpportunitySection />
        <CourseSection />
        <SignupSection />
      </div>
    </div>
  );
}
