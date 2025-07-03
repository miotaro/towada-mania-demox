import MenuList from "./MenuList"
import RelateMenu from "./RelateMenu"

export default function ThirdPage() {
  return (
    <>
      <h2>季節を感じるメニューも魅力</h2>
      <p>
        季節ごとに変わるメニューも魅力の一つ。例えば、春には桜をイメージしたドリンク、夏には爽やかなフルーツを使ったカクテルなど、四季折々の食材を使ったメニューが楽しめます。
      </p>


      <div className="exp-group">
        <h3 className="exp-group__title">泉質</h3>
        <p>
          泉質について泉質について泉質について泉質について泉質について泉質について泉質について泉質について泉質について泉質について泉質について泉質について泉質について
        </p>
      </div>
      {/* <!-- /.exp-group --> */}

      <MenuList />
      <RelateMenu />
    </>
  )
}