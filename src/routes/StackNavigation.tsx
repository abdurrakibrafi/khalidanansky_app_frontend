import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomNavigation } from "./BottomNavigation";
import { 
  Setting,
  PaymentAnimation,
  PaymentInfo,
  TrackOrder,
  ViewDetails,
  PaymentOption,
  SpecialInstructions,
  DeliveryRequestView,
  Withdraw,
  WithdrawRequest,
  Bank,
  BankEdit,
  History
} from "src/screens";

import { ProviderBottomNavigation } from "./ProviderBottomNavigation";
import { ActivityIndicator } from "react-native";
import { useAppSelector } from "src/redux/hooks";
import BrandDetails from "src/screens/Bage/BrandDetails";
import BrandProducts from "src/screens/Bage/BrandProducts";
import ProductDetails from "src/screens/Bage/ProductDetails";
import UsersORBrandProfile from "src/screens/Feed/UsersORBrandProfile";
import CartPage from "src/screens/Cart/CartPage";
import Review from "src/screens/Review/Review";
import Products from "src/screens/Products/Products";
import AddProducts from "src/screens/Products/AddProducts";
import AllProducts from "src/screens/Products/AllProducts";
import SeeAllProducts from "src/screens/Bage/SeeAllProducts";
import SeeAllBrands from "src/screens/Bage/SeeAllBrands";
import OrderList from "src/screens/Orders/OrderList";
import SearchResult from "src/screens/Search/SearchModal";
import DetailsProduct from "src/screens/Products/DetailsProduct";
import EditProducts from "src/screens/Products/EditProducts";
import SearchPage from "src/screens/Search/SearchPage";
import PaymentScreen from "src/screens/Payment/PaymentScreen";
import Transaction from "src/screens/Earning/Transaction";
import { RootStackParamList } from "src/types/screens";
import RecommendedList from "src/screens/RecommendedList/RecommendedList";
import ShortVideo from "src/screens/RecommendedList/ShortVideo";
import Search from "src/screens/Search/Search";
import Notification from "src/screens/Notification/Notification";
import VideoDetails from "src/screens/VideoDetailsWithProfile/VideoDetails";
import ProfileDetails from "src/screens/VideoDetailsWithProfile/ProfileDetails";
import VerificationAgent from "src/screens/ProfileSetUp/VerificationAgent";
import MyRoaster from "src/screens/Roaster/MyRoaster";
import MapScreen from "src/screens/Map/Map";
import ProfileInformation from "src/screens/Profile/ProfileInformation";
import VerificationDoc from "src/screens/Profile/VerificationDoc";
import PrivacySettings from "src/screens/Profile/PrivacySettings";
import Terms from "src/screens/Profile/Terms";
import Language from "src/screens/Profile/Language";
import RequestDetails from "src/screens/Confirmation/RequestDetails";
import MyShort from "src/screens/Profile/MyShortList";
import MyContributions from "src/screens/Profile/MyContributions";
import RejectVideo from "src/screens/Profile/RejectVideo";
import MyTags from "src/screens/Profile/Mytags";


const Stack = createStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  const userType = useAppSelector((store)=>store.auth.userType)
  


  if(!userType){
    <ActivityIndicator size="large"/>
  }

  return (
    
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: "#00084F",
          },
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitleStyle: {
            fontFamily: "HelveticaNeue-Black",
          },
          headerTintColor: "#006400",
          // headerRight: () => <NavRight routeName={routeNameRef.current} />,
        }}
      >
        {<Stack.Screen
          name="BottomScreen"
          component={userType=="User"?BottomNavigation:ProviderBottomNavigation}
          options={{
            headerShown: false,
          }}
        />}
        {/* <Stack.Screen name="Notification" component={} /> */}
        {/* <Stack.Screen name="Profile" options={{headerShown:false}} component={Profile} /> */}

        <Stack.Screen name="Setting" component={Setting}/>
        <Stack.Screen name="Order List" options={{headerShown:true}} component={OrderList}/>

        <Stack.Screen name="Payment Animation" options={{headerShown:false}} component={PaymentAnimation}/>
        <Stack.Screen name="Payment Info" options={{headerShown:false}} component={PaymentInfo}/>
        <Stack.Screen name="Track Order" component={TrackOrder}/>
        <Stack.Screen name="View Details" component={ViewDetails}/>
        <Stack.Screen name="Payment Options" component={PaymentOption}/>
        <Stack.Screen name="Special Instructions" component={SpecialInstructions}/>

        <Stack.Screen name="Delivery Request" component={DeliveryRequestView}/>
        <Stack.Screen name="Search Result" options={{headerShown:false}} component={SearchResult}/>
        <Stack.Screen name="Search Page" options={{headerShown:false}} component={SearchPage}/>
        
        <Stack.Screen name="Withdraw" component={Withdraw}/>
        <Stack.Screen name="Withdraw Request" component={WithdrawRequest}/>
        <Stack.Screen name="Bank" component={Bank}/>
        <Stack.Screen name="Bank Edit" component={BankEdit}/>
        <Stack.Screen name="History" component={History}/>
        <Stack.Screen name="Brand Details" options={{headerShown:true}} component={BrandDetails}/>
        <Stack.Screen name="Brand Products" options={{headerShown:true}} component={BrandProducts}/>
        <Stack.Screen name="See all products" options={{headerShown:true}} component={SeeAllProducts}/>
        <Stack.Screen name="See all brands" options={{headerShown:true}} component={SeeAllBrands}/>
        <Stack.Screen name="Product Details" options={{headerShown:true}} component={ProductDetails}/>
        <Stack.Screen name="Details Product" options={{headerShown:true}} component={DetailsProduct}/>
        <Stack.Screen name="Other/brand profile" options={{headerShown:true}} component={UsersORBrandProfile}/>
        <Stack.Screen name="Cart Page" options={{headerShown:true}} component={CartPage}/>
        <Stack.Screen name="Review" options={{headerShown:true}} component={Review}/>
        <Stack.Screen name="Products" options={{headerShown:true}} component={Products}/>
        <Stack.Screen name="Add Products" options={{headerShown:true}} component={AddProducts}/>
        <Stack.Screen name="Edit Products" options={{headerShown:true}} component={EditProducts}/>
        <Stack.Screen name="All Products" options={{headerShown:true}} component={AllProducts}/>
        <Stack.Screen name="Payment screen" options={{headerShown:true}} component={PaymentScreen}/>
        <Stack.Screen name="Transaction" options={{headerShown:true}} component={Transaction}/>


         <Stack.Screen options={{headerShown:true}} name="Recommended List" component={RecommendedList}/>
         <Stack.Screen options={{headerShown:false}} name="Short video" component={ShortVideo}/>
         <Stack.Screen options={{headerShown:true}} name="Search" component={Search}/>
         <Stack.Screen options={{headerShown:true}} name="Notification" component={Notification}/>
         <Stack.Screen options={{headerShown:true}} name="Video Details" component={VideoDetails}/>
         <Stack.Screen options={{headerShown:true}} name="Profile Details" component={ProfileDetails}/>
         <Stack.Screen options={{headerShown:true}} name="Roaster" component={MyRoaster}/>
         <Stack.Screen options={{headerShown:true}} name="Profile Information" component={ProfileInformation}/>
         <Stack.Screen options={{headerShown:true}} name="Verification Doc" component={VerificationDoc}/>
         <Stack.Screen options={{headerShown:true}} name="Privacy Settings" component={PrivacySettings}/>
         <Stack.Screen options={{headerShown:true}} name="Terms" component={Terms}/>
         <Stack.Screen options={{headerShown:true}} name="Language" component={Language}/>
         <Stack.Screen options={{headerShown:true}} name="Request Details" component={RequestDetails}/>
         <Stack.Screen options={{headerShown:true}} name="Shortlist" component={MyShort}/>
         <Stack.Screen options={{headerShown:true}} name="My Contributions" component={MyContributions}/>
         <Stack.Screen options={{headerShown:true}} name="Reject Video" component={RejectVideo}/>
         <Stack.Screen options={{headerShown:true}} name="My Tags" component={MyTags}/>
         


      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default StackNavigation;
