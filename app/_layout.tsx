import { Stack } from "expo-router";
import { ClerkLoaded, ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { SafeAreaProvider,SafeAreaView } from "react-native-safe-area-context";
import login from "./(auth)/login";
import InitialLayout from "@/components/InitialLayout";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error('Missing publishable key')
}

export default function RootLayout() {
  return (
<ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey} >
  <ClerkLoaded>
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1, backgroundColor:"black"}}>
         <InitialLayout/>
        </SafeAreaView>
    </SafeAreaProvider>  
  </ClerkLoaded>
</ClerkProvider>
);}
