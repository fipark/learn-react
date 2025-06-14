function App() {

  const data = {
    _id: 2,
    price: 125000,
    shippingFees: 3000,
    name: '나이키 잼',
    quantity: 35,
    buyQuantity: 10,
    mainImage: "/files/00-nike/NIKE_JAM_01.jpg",
    content: '나이키가 세계적인 무대에 오르는 브레이크 댄서를 위해 제작한 첫 신발인 잼과 함께 몸과 마음, 정신을 하나로 만들어 보세요. 신발의 모든 디테일을 꼼꼼히 제작했기 때문에 자신 있게 사이퍼에 도전할 수 있습니다. 유연하고 내구성이 뛰어난 갑피가 몸을 따라 움직이며, 중창의 텍스처 처리된 핸드 그립 덕분에 공중에서 신발을 쉽게 잡을 수 있습니다. 그리고 위아래가 뒤집힌 로고를 배치해 프리즈 동작을 할 때 로고가 똑바로 보이는 재미를 더했죠.'
  };

  // 수량이 변경되면 배송비 다시 계산
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
  };

  // 결제 버튼 클릭 시 결제 확인 메시지 표시
  const handlePayment = () => {
    alert(`상품을 결제하시겠습니까?`);
  };

  return (
    <>
      <h1>06 useCallback(함수 자체를 memoize), React.memo(컴포넌트를 memoize)</h1>

      <h2>상품 설명</h2>
      <p>상품명: { data.name }</p>
      <p>가격: { data.price.toLocaleString() }원</p>
      <p>상품 설명</p>
      <div>
        <img src="https://fesp-api.koyeb.app/nike/files/00-nike/AIR_MAX_A_01.png" width="600" />
        <p>{ data.content }</p>
      </div>

      <h2>수량 선택</h2>
      <div>
        가격: { data.price.toLocaleString() }원<br />
        수량: <input type="number" min="1" max={ data.quantity - data.buyQuantity } value="2" />
        (배송비는 5개당 { data.shippingFees.toLocaleString() }원씩 추가됩니다.)<br />
        상품 금액: { (data.price * 2).toLocaleString() }원
      </div>

      <h2>배송비</h2>
      <div>
        배송비: { data.shippingFees.toLocaleString() }원<br />
      </div>
      <br />
      <button type="button">결제</button>
    </>
  );
}

export default App
