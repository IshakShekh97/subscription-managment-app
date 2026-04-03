import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-4xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href={"/onboarding"}
        className="mt-4 rounded bg-primary text-white p-4 font-bold text-lg"
      >
        Get Started
      </Link>

      <Link href={"/(auth)/signup"} className="mt-4 text-blue-500">
        {"Don't"} have an account? Sign up
      </Link>
      <Link href={"/(auth)/signin"} className="mt-2 text-blue-500">
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
    </View>
  );
}
