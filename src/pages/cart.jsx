import React from 'react';
import { Button, Typography,message ,List,Avatar,InputNumber} from 'antd';
import { Container, CustomButton, Paragraph, Text, Wrapper, WrapperContent } from '@/styles/pages/categories';
import Link from 'next/link';
import { Space} from 'antd';
import { useCart } from '@/utils/context/cartContext';
import { IoStar } from "react-icons/io5";

const { Title } = Typography;

const CartPage = () => {
const [messageApi, contextHolder] = message.useMessage()
  const { cart, dispatch } = useCart()

  const handleQuantityChange = (product, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: product.id, quantity } });
  };

  const handleRemoveFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: product.id } });
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    console.log(cart)
    
  return (
      <Container>
          {contextHolder}
       <Wrapper>
       <Space direction="vertical" style={{ display: 'flex', justifyContent: 'center', gap: 0 }}>
          <Title level={3} style={{ margin: '0 0 10px 0' }}>Carts</Title>
          <Text>We will keep you notified.</Text>
        </Space>
        {cart.length === 0 ? (
        <Text>Your cart is empty...</Text>
      ) : (
  
             <List
             pagination={{ pageSize: 6 }}
             style={{ width: '100%' }}
             itemLayout="horizontal"
             dataSource={cart}
             renderItem={(item) => (
               <List.Item key={item.id}>
                 <List.Item.Meta
                   avatar={
                   <Avatar shape="square" src={item.image} style={{ width: '120px', height: 'auto',padding:'0 10px' }} />
                 }
                   title={<Title level={5} style={{textAlign:'left'}}>{item.title}</Title>}
                   description = {
                    <WrapperContent>
                      <Paragraph
                       ellipsis={{
                         rows: 1,
                         expandable: false,
                         suffix: ' ',
                       }}
                     >
                       {item.description}
                     </Paragraph>
                     <Space >
                     <Space>
                     <Text>{item.price}$</Text>
                     <Text>
                       <span style={{backgroundColor:'#000000',borderRadius:'5px',padding:'0px 10px',color:'#ffffff'}}>
                                 {item?.rating?.rate} <IoStar style={{color:' #ffc400'}}/>
                        </span>
                     </Text>
                     </Space>
                     
                     <InputNumber
                            min={1}
                            value={item.quantity}
                            onChange={(value) => handleQuantityChange(item, value)}
                        />
                     </Space>
                    </WrapperContent>
                   }
                 />
                 <Space direction="vertical">
                 <CustomButton type="danger" onClick={() => handleRemoveFromCart(item)}>
                         Remove
                  </CustomButton>
                 <Link href={`/product/${encodeURIComponent(item.id)}`}>
                 <CustomButton
                  style={{
                   margin: '0 0 20px 0'        
                  }}
                 >Buy
                 </CustomButton>
                 </Link>
                 </Space>
               </List.Item>
             )}
           />
        )}
               
         <Title level={6}>Total: ${totalPrice.toFixed(2)}</Title>
        <CustomButton t onClick={() => dispatch({ type: 'CLEAR_CART' })}>
            Clear Cart
        </CustomButton>
      </Wrapper> 
        
  </Container>
  );
};

export default CartPage;
