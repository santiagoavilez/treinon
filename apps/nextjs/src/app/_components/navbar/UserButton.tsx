"use client";
import { ClerkLoaded, ClerkLoading, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Loader2, DotIcon } from "lucide-react";

export default function UserButtonNav() {
    return (
        <div>
            <ClerkLoading >
                <Loader2 className="animate-spin w-7 h-7" />
            </ClerkLoading>
            <ClerkLoaded>
                <SignedIn>
                    {/* Mount the UserButton component */}
                    <UserButton >
                        <UserButton.UserProfilePage
                            label="Terms"
                            labelIcon={<DotIcon />}
                            url="terms"
                        >
                            <div>
                                <h1>Custom Terms Page</h1>
                                <p>This is the custom terms page</p>
                            </div>
                        </UserButton.UserProfilePage>
                    </UserButton>
                </SignedIn>
                <SignedOut>
                    {/* Signed out users get sign in button */}
                    <SignInButton />
                </SignedOut>
            </ClerkLoaded></div>
    )
}
