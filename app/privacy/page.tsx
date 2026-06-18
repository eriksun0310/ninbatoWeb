import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "隱私權政策 - 忍者鴿 Ninbato",
};

export default function PrivacyPage() {
  return (
    <main className="flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-2xl">
        <h1 className="mb-2 text-3xl font-bold text-primary">
          隱私權政策
        </h1>
        <p className="mb-8 text-sm text-foreground/60">
          最後更新日期：2026 年 6 月
        </p>

        <p className="mb-6 leading-relaxed">
          歡迎使用<strong>忍者鴿（Ninbato / にんばと）</strong>
          ！本隱私權政策說明我們如何處理您在使用本 App
          時的資料。我們非常重視您的隱私。
        </p>

        <Section title="一、我們收集什麼資料">
          <p>
            簡單來說：<strong>我們基本上不收集任何個人資料。</strong>
          </p>
          <p>
            您的遊戲進度與設定全部儲存在您的裝置本機（SQLite），不會上傳至任何伺服器。我們沒有帳號系統，也不要求您提供姓名、信箱、電話或任何個人識別資訊。
          </p>
        </Section>

        <Section title="二、第三方服務">
          <p>本 App 使用以下第三方服務：</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>
              <strong>RevenueCat</strong>
              （內購管理）—
              用於處理應用程式內購買交易。RevenueCat
              會接收由 Apple 或 Google
              提供的匿名交易識別碼，不會收到您的個人資訊。詳情請參閱{" "}
              <a
                href="https://www.revenuecat.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:text-primary/80"
              >
                RevenueCat 隱私權政策
              </a>
              。
            </li>
          </ul>
          <p>
            本 App 不使用廣告追蹤、不嵌入 Analytics
            分析工具。所有音檔皆預先生成並隨 App
            安裝包提供，不會即時呼叫任何外部 API。
          </p>
        </Section>

        <Section title="三、我們不做的事">
          <ul className="ml-4 list-disc space-y-1">
            <li>不出售您的資料</li>
            <li>不將資料分享給第三方</li>
            <li>不追蹤您的地理位置</li>
            <li>不收集您的姓名、信箱或電話號碼</li>
            <li>不進行廣告投放或行為追蹤</li>
          </ul>
        </Section>

        <Section title="四、資料儲存">
          <p>
            所有資料皆儲存在您的裝置本機，無雲端同步功能。刪除 App
            即可移除所有相關資料。
          </p>
        </Section>

        <Section title="五、兒童隱私">
          <p>
            本 App 不針對 13
            歲以下兒童設計。我們不會故意收集兒童的個人資訊。如果您發現有兒童向我們提供了個人資訊，請聯繫我們，我們將立即刪除相關資料。
          </p>
        </Section>

        <Section title="六、隱私權政策的變更">
          <p>
            我們可能會不定期更新本隱私權政策。任何變更將在本頁面公布，並更新「最後更新日期」。建議您定期查看本頁面。
          </p>
        </Section>

        <Section title="七、聯絡我們">
          <p>
            如果您對本隱私權政策有任何疑問，請透過以下方式聯繫我們：
          </p>
          <p>
            Email：{" "}
            <a
              href="mailto:connect.ptalk@gmail.com"
              className="text-primary underline hover:text-primary/80"
            >
              connect.ptalk@gmail.com
            </a>
          </p>
          <p>開發者：PTalk</p>
        </Section>
      </article>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 text-xl font-semibold text-primary/90">{title}</h2>
      <div className="space-y-3 leading-relaxed">{children}</div>
    </section>
  );
}
