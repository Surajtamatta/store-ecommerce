import React, { useState, useEffect } from 'react';
import { Space,  Typography,message} from 'antd';
import { Container,Wrapper,Text,SearchWrapper,Search,SpaceContent} from '../styles/pages/categories';
import StyledInputs from '@/components/Input';
import DropDown from '@/components/DropDown';
import ProductLists from '@/components/ProductLists';


const { Title } = Typography;

const CategorySelector = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const [productsdata, setProductsData] = useState([]);
  const [categorydata, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState("sortby"); 

  const fetchproducts = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProductsData(data);
      console.log(data)
    } catch (error) {
      messageApi.open({
        type: 'error',
        content: `error:${error}`,
      }); 
    } finally {
      setLoading(false); 
    }
  };


const fetchCategories = async () => {
  try {
    const response = await fetch('/api/categories/categories');
    console.log(`Fetching categories from /api/categories/categories`);
    if (!response.ok) throw new Error(`Failed to fetch categories: ${response.statusText}`);
    const data = await response.json();
    console.log('Categories:', data); 
    setCategoryData(data);
  } catch (error) {
    console.error('Error fetching categories:', error.message); 
  }
};



const fetchProductsByCategory = async (category) => {
  setLoading(true);
  try {
    const response = await fetch(`/api/categories/category/${category}`);
    if (!response.ok) throw new Error('Failed to fetch products');
    const data = await response.json();
    console.log('Products in category:', data);
    setProductsData(data);
  } catch (error) {
    console.error(error.message);
    messageApi.open({ type: 'error', content: `Error: ${error.message}` });
  } finally {
    setLoading(false);
  }
};


useEffect(() => {
  fetchproducts();
  fetchCategories();
}, []);



  const dropdownMenuItems = categorydata?.map((category) => ({
    key: category,
    label: category,
  }));

  const allDataMenu = {
    key: "all",
    label: "All",
  };

  const combinedMenuItems = [allDataMenu, ...dropdownMenuItems];

  const handleMenuClick = (e) => {
    setLoading(true)
    if (e.key === "all") {
      fetchproducts();
      setSelectedCategory("All");
      setSearchQuery()
      setLoading(false)
    } else {
      fetchProductsByCategory(e.key);
      setSelectedCategory(e.key);
    }
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
    if (value.trim() === "") {
      setFilteredProducts(productsdata);
    } else {
      const filtered = productsdata.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };


  const sortOptions = [
    { key: "sortby", label: "Sort By" },
    { key: "priceAsc", label: "Price: Low to High" },
    { key: "priceDesc", label: "Price: High to Low" },
    { key: "ratingDesc", label: "Rating: High to Low" },
  ];
  const sortingMenu = sortOptions.map((item) => ({
    key: item.key,
    label: item.label,
  }));
  const handleSort = (e) => {
    let sortedProducts = [...filteredProducts];
    if (e.key === "priceAsc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (e.key === "priceDesc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (e.key === "ratingDesc") {
      sortedProducts.rating?.sort((a, b) => b.rate - a.rate);
    }
    setSortOption(e.key); 
    setFilteredProducts(sortedProducts); 
  };
  const selectedSortLabel = sortOptions.find((option) => option.key === sortOption)?.label || "Sort By";


useEffect(() => {

  if (!searchQuery) {
    setFilteredProducts(productsdata);
  }
}, [productsdata]);

console.log(sortOption)
  return (
    <Container>
      {contextHolder}
      <Wrapper>
        <Space direction="vertical" style={{ display: 'flex', justifyContent: 'center', gap: 0 }}>
          <Title level={3} style={{ margin: '0 0 10px 0' }}>List of products</Title>
          <Text>We will keep you notified.</Text>
        </Space>
        <SpaceContent style={{ width: '100%', justifyContent: 'space-between',}}>
          <Title level={5}>My saved products list</Title>
         <SearchWrapper>
         <DropDown
              items={sortingMenu}
              onClick={handleSort}
              value={selectedSortLabel}
            />
         <DropDown items={combinedMenuItems} onClick={handleMenuClick}  value={selectedCategory}/>
          <StyledInputs
           type='borderless'
           value={searchQuery}
           onChange={(e) => handleSearch(e.target.value)}
           />
           <Search />
         </SearchWrapper>
        </SpaceContent>
       <ProductLists productsdata={filteredProducts} loading={loading}/>

      </Wrapper> 
    
    </Container>
  );
};

export default CategorySelector;
