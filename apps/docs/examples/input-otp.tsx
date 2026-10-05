"use client";
import { useState, useId } from "react";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "../../../registry/ui/input-otp";
import { Label } from "../../../registry/ui/label";
export default function InputOTPExample() { const [value,setValue]=useState(''); const id=useId(); return <div className="space-y-3"><Label htmlFor={id}>Verification code</Label><InputOTP id={id} name="code" maxLength={6} pattern={REGEXP_ONLY_DIGITS} value={value} onChange={setValue}><InputOTPGroup>{[0,1,2].map(index=><InputOTPSlot key={index} index={index} />)}</InputOTPGroup><InputOTPSeparator /><InputOTPGroup>{[3,4,5].map(index=><InputOTPSlot key={index} index={index} />)}</InputOTPGroup></InputOTP><p role="status" className="text-sm text-muted-foreground">{value.length === 6 ? `Code entered: ${value}. Verification belongs to your app.` : 'Enter a six-digit code.'}</p></div>; }
