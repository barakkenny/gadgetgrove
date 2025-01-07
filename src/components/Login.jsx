import { useRef, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {Button} from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { checkValidData } from "@/utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";  
import { auth } from "@/utils/firebase";
import { useDispatch } from 'react-redux'
import { addUser } from '@/utils/userSlice'
import Header from './Header'

const Login = () => {
  // const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignIn = (e) => {
    e.preventDefault(); 
    
    const message = checkValidData(email.current.value, password.current.value);
     setErrorMessage(message);
    console.log(email.current.value);
    console.log(password.current.value);

    if(message) return;

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        return user
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode +"-"+ errorMessage)
      });
  }

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, name.current.value, email.current.value, password.current.value)
  .then((userCredential) => {
    updateProfile(auth.currentUser, {
      displayName: name.current.value
    }).then(() => {
      const { uid, email, displayName} = auth.currentUser;
      dispatch(addUser ({
        uid: uid,
        email: email,
        displayName: displayName,
      }))
      
    }).catch((error) => {
      setErrorMessage(error.message)
    });
    // Signed up 
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +""+ errorMessage)
  });
  }

  return (
    <section>
      <Header />
      <section className="flex items-center justify-center mt-28">
    <Tabs defaultValue="account" className="w-[500px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login" className=''>Login</TabsTrigger>
        <TabsTrigger value="signup">Signup</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle className='text-2xl text-center font-bold'>Login</CardTitle>
            {/* <CardDescription>
              Make changes to your account here. Click save when you&apos;re done.
            </CardDescription> */}
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Email</Label>
              <Input ref={email} type='email' id="email" placeholder="Email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Password</Label>
              <Input 
              ref={password}
              type='password'
              id="password" 
              placeholder="Password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button onSubmit={handleSignIn}>Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="signup">
        <Card>
          <CardHeader>
            <CardTitle className='text-2xl text-center font-bold'>Sign Up</CardTitle>
            {/* <CardDescription>
              Change your password here. After saving, you&apos;ll be logged out.
            </CardDescription> */}
          </CardHeader>
          <CardContent className="space-y-2">
          <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input ref={name} id="name" type="text" placeholder='Name'/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input ref={email} id="email" type="email" placeholder='Email' />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input ref={password} id="password" type="password" placeholder='Password' />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSignUp}>Sign Up</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
      </section>
    </section>
  )
}

export default Login
