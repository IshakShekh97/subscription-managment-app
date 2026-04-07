import "@/global.css";
import { Link } from "expo-router";
import { Text } from "react-native";

import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1  bg-background p-5">
      <Text className="text-7xl font-sans-extrabold ">Home</Text>
      <Text className="text-7xl font-bold  ">Home</Text>
      <Link
        href={"/onboarding"}
        className="mt-4 rounded bg-primary text-white p-4 font-bold text-lg"
      >
        Get Started
      </Link>

      <Link
        href={"/(auth)/signup"}
        className="mt-4 font-sans-bold text-blue-500"
      >
        {"Don't"} have an account? Sign up
      </Link>
      <Link
        href={"/(auth)/signin"}
        className="mt-2 font-sans-light text-blue-500"
      >
        Already have an account? Sign in
      </Link>

      <Link href="/subscriptions/spotify">Spotify Subscriptions</Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
      >
        Claude Max Subscription
      </Link>
    </SafeAreaView>
  );
}
