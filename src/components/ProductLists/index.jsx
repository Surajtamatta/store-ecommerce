import React from "react";
import { List, Avatar, Spin } from 'antd';

import { Paragraph,CategoryList, CustomButton,Title,WrapperContent, Text} from "@/styles/pages/categories";
import Link from "next/link";
import { IoStar } from "react-icons/io5";

const ProductLists = ({ productsdata, loading }) => {


  return (
    <>
    <CategoryList>
      {loading ? (
        <Spin size="large" />
      ) : (
        <List
          pagination={{ pageSize: 6 }}
          style={{ width: '100%' }}
          itemLayout="horizontal"
          dataSource={productsdata}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={
                <Avatar shape="square" src={item.image} style={{ width: '120px', height: 'auto',padding:'0 10px' }} />
              }
                title={<Title>{item.title}</Title>}
                description={
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
                  <Text>{item.price}$</Text>
                  <Text>
                    <span style={{backgroundColor:'#000000',borderRadius:'5px',padding:'0px 10px',color:'#ffffff'}}>
                              {item?.rating?.rate} <IoStar style={{color:' #ffc400'}}/>
                       </span>
                  </Text>
                 </WrapperContent>
                }
              />
              <Link href={`/product/${encodeURIComponent(item.id)}`}>
              <CustomButton
               style={{
                margin: '0 0 20px 0'
               }}
              >Details
              </CustomButton>
              </Link>
            </List.Item>
          )}
        />
      )}
    </CategoryList> 
    </>
  );
};

export default ProductLists;
