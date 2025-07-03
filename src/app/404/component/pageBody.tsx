import Button from "@/component/Button";

export default function PageBody() {
  return ( 
    <>
    <section className="error404 gutter-container">
      <div className="error404__img">
        <img src="img/404_img.svg" width="100%" height="auto" alt="" />
      </div>
      <h2 className="error404__title text-box-center">お探しのページは見つかりませんでした</h2>
      <p className="error404__text">
        該当のページはアドレス変更、削除されたか、一時的にアクセスできない状況にある可能性があります。
      </p>
      <Button
        groupClass="btn-group"
        linkClass="btn-primary"
        title="ホームへ戻る"
        href="/top"
      />
    </section>
    </>
  )
}