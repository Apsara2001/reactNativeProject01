import { StyleSheet, View } from 'react-native';
import { Text,Divider,Button} from 'react-native-paper';
export default function Home(){
    return(
        <>
         <Text varient="headingLarge">Heading Large</Text>
        <Divider/>
        <Text varient="bodyMedium" style={styles.body}>You are beautiful You are beautiful You are beautiful You are beautiful
        You are beautiful You are beautiful You are beautiful You are beautiful You are beautiful You are beautiful You are beautiful You are beautiful 
        You are beautiful You are beautiful You are beautiful You are beautiful You are beautiful You are beautiful You are beautiful You are beautiful
        You are beautiful You are beautiful You are beautiful
        You are beautiful You are beautiful You are beautiful You are beautiful You are beautiful You are beautiful You are beautiful You are beautiful 
        You are beautiful You are beautiful You are beautiful You are beautiful You are beautiful You are beautiful You are beautiful You are beautiful
        tiful You are beautiful You are beautiful You are beautiful You are beautiful You are beautiful You are beautiful
        </Text>
        <Button icon="camera" mode="outlined" onPress={()=>console.log('pressed')}>
        press me    
        </Button> 
        </>
        
    );
}
const styles = StyleSheet.create({
    
    body:{
      padding:5,
      textAlign:'justify'
    }
  });
  