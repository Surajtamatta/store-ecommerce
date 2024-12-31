import { Space, Typography,Badge} from 'antd';
import { FaBarsStaggered } from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { Container, Header, Nav, NavContent, NavLink,BadgeCart, Wrapper,MenuIcon ,LogoContent,IconWrapper,CartLink} from '../../styles/components/Navbar';
import { useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { useCart } from '@/utils/context/cartContext';


const Navbar = () => {
    const { cart } = useCart();
   const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    const [click,setClick] = useState(false)
    const handleClick=()=>setClick(!click)
  return (
    <Container>
        <Wrapper>
        <Header>
                <Space
                style={{gap:20}}
                >
                <Typography.Text>Help</Typography.Text>
                <Typography.Text>products or products</Typography.Text>
                <Typography.Text>Hi, John</Typography.Text>
                </Space>
        </Header>
        <Nav >
            <LogoContent
            >
                 <a href="/">
                 <Typography.Title level={2} style={{margin:0}}>PRODUCTS</Typography.Title>
            </a>
                
            </LogoContent>
            <NavContent click={click}>
            <NavLink href="/">
                <Typography.Text>Categories</Typography.Text>
            </NavLink>
            <NavLink href="/">
            <Typography.Text>products List</Typography.Text>
            </NavLink>
            <NavLink href="/">
            <Typography.Text>Trending</Typography.Text>
            </NavLink>
            <NavLink href="/cart">
               <BadgeCart>
               <Badge count={totalItems} size="small" >
                 <FaCartPlus style={{height:25,minHeight:25,width:25,minWidth:25}}/>
               </Badge>
               </BadgeCart>
                <Typography.Text>Cart</Typography.Text>
          </NavLink>
            </NavContent>
            <IconWrapper 
                style={{fontSize:25}}
                direction='horizontal'
                
            >
                <CartLink href="/cart">
                 
                    <Badge count={totalItems} size="small">
                    <FaCartPlus style={{height:25,minHeight:25,width:25,minWidth:25}}/>
                    </Badge>
                  
               
                </CartLink>
                 <IoIosSearch style={{height:25,minHeight:25,width:25,minWidth:25

                 }}/>
                 

                 <MenuIcon 
                 onClick={handleClick}
                 >
               
                 {click ? <GiCrossMark/>:< FaBarsStaggered/>}
                </MenuIcon>
            </IconWrapper>
           
        </Nav>
        </Wrapper>
        
    </Container>
  );
};

export default Navbar;
