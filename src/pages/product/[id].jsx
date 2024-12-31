
import React, { useState, useEffect, useContext } from 'react';
import { Typography, Space, Spin,message } from 'antd';
import { Text, RowWrapper, ColWrapper,ImageContent, ContentText, Paragraph, CustomButton, Container, Wrapper,ButtonWrapper } from '@/styles/pages/categories';
import Image from 'next/image';
import { IoStar } from "react-icons/io5";

import { useRouter } from 'next/router';
import { useCart } from '@/utils/context/cartContext';


const { Title } = Typography;
const Products = () => {
    const [loading, setLoading] = useState(true);
    const [productsData, setProductsData] = useState([]);

    const [messageApi, contextHolder] = message.useMessage()
    const router = useRouter();
    const { id } = router.query;

    const { dispatch } = useCart();


    const fetchProductDetails = async () => {
        if (!id) {
            console.error('Product ID is missing');
            return;
          }
        setLoading(true);
        try {
            console.log(`Fetching product with ID: ${id}`);
          const response = await fetch(`/api/productdetails/${id}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch product: ${response.statusText}`);
          }
          const data = await response.json();
          setProductsData(data);
          console.log(data)
        } catch (err) {
          console.error(err.message);
          messageApi.open({
            type: 'error',
            content: `error:${err}`,
        });
        } finally {
          setLoading(false);
        }
      };
      useEffect(() => {
        if (id) {
            fetchProductDetails();
        }
      }, [id]);
    
      const handleAddToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
      };
    return (


        <Container>
            {contextHolder}
            <Wrapper>
                {loading ? (
                    <Spin size="large" />
                ) : (

                    <>
                        <Space direction="vertical" style={{ display: 'flex', justifyContent: 'center', gap: 0 }}>
                            <Title level={2} style={{ margin: '0 0 30px 0' }}>{productsData?.title}</Title>
                        </Space>
                            <RowWrapper >
                                    <ColWrapper >
                                            <ImageContent>
                                            <Image 
                                            src={productsData?.image} 
                                            alt={`product image`} 
                                            layout='fill'
                                            objectFit='contain'
                                            />
                                            </ImageContent>
                                    </ColWrapper>
                                    <ColWrapper >
                                    <Space direction='vertical' style={{width:'100%'}}>
                                    <ContentText><strong>Price:</strong> {productsData.price}$</ContentText>
                                    <ContentText><strong>rating:</strong> 
                                    <span style={{backgroundColor:'#000000',borderRadius:'5px',padding:'0px 10px',color:'#ffffff'}}>
                                    {productsData?.rating?.rate} <IoStar style={{color:' #ffc400'}}/>
                                    </span>
                                    </ContentText>
                                    <ContentText><strong>Category:</strong> {productsData.category}</ContentText>
                                    </Space>
                                    <Paragraph>{productsData.description}</Paragraph>
                                    <ButtonWrapper>
                                    <CustomButton onClick={()=>handleAddToCart(productsData)}>Add To Cart</CustomButton>
                                    <CustomButton >BUY</CustomButton>
                                    </ButtonWrapper>
                                    </ColWrapper>
                            </RowWrapper>
                    
                    </>
                )}
            </Wrapper>

        </Container>
    );
};

export default Products;
