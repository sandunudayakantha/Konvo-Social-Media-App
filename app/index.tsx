import { Text, View , TouchableOpacity} from "react-native";
import { styles } from "../styles/auth.styles";

export default function Index() {
  return (
    <View
      style={styles.container}>
     <Text style={styles.title}>hello

     </Text>

     <TouchableOpacity onPress={()=> alert("yu tuched")}>
      <Text>touch me</Text>
     </TouchableOpacity>
    </View>
  );
}

