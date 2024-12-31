
import styled from 'styled-components';
import { Button, Carousel, Space, Typography } from 'antd';
import { IoIosSearch } from "react-icons/io";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 1150px;
  
 
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media  (max-width:600px){
    padding: 15px;
}
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
 position: relative;
`;
export const Search = styled(IoIosSearch)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  font-size: 20px;
  right: 5px;
  z-index: -1;

`;
export const CategoryList = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
`;


export const SpaceContent = styled(Space)`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
  @media (max-width:600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`


export const CustomButton = styled(Button)`
  width: 100%;
  min-width:100px;
  max-width: 120px;
  background-color:#000000; 
  border-color: #000000;     
  color: white;              
  border-radius: 6px ;       
  padding: 10px 15px;  
  min-height  : 35px;
  font-size: 16px;         
  font-weight: bold;        
  box-shadow: 0 4px 6px rgba(66, 66, 66, 0.1); 
  &:hover {
    background-color: #000000c1; 
    border-color: #494949a6;     
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(40, 40, 40, 0.665);
  }
`;

export const Paragraph = styled(Typography.Paragraph)`
  display: flex;
  width: 100%;
  max-width:400px;
  justify-content:flex-start;
  align-items: flex-start;
  text-align: justify;
  color: #545c72;
 
  @media (max-width: 850px) {
    max-width:none;
  }

`
export const WrapperContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content:space-between;
  align-items: flex-start;
  

`

export const Text = styled(Typography.Text)`
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content:flex-start;
  align-items: flex-start;
  text-align: left;
  font-weight: 700;
  font-size: 18px;
  color: #444445;
`
export const ContentText = styled(Typography.Text)`
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content:flex-start;
  align-items: flex-start;
  text-align: left;
  font-weight: 600;
  font-size: 16px;
  color: #444445;
`
export const Title = styled(Typography.Title).attrs({level:4})`
  display: flex;
  width: 100%;
  justify-content:flex-start;
  align-items: flex-start;
  text-align: left;
`

export const RowWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content:flex-start;
  align-items: flex-start;
  gap: 20px;
  flex-direction: rows;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export const ColWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const ImageContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  max-height: 400px;
  min-height: 400px;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 850px) {
    width: 100%;
    height: 100%;
    
   
  }
`;





export const ButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  align-items: flex-start;  
`;