/* eslint-disable react/no-string-refs */
/* eslint-disable react/jsx-no-undef */
'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"
// import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../components/ui/dialog"
import {  Home, CreditCard, History, Info, Wallet } from 'lucide-react'
import Image from 'next/image'

export default function Dashboard() {
//   const router = useRouter()
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [activeTab, setActiveTab] = useState('home')
  const [mintForm, setMintForm] = useState({ projectId: '', quantity: '', action: 'assign' })
  const [tokenHistory, setTokenHistory] = useState<{ id: string; gsid: string; serialId: string; projectName: string; quantity: string; action: string; timestamp: string }[]>([])
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [confirmationDetails, setConfirmationDetails] = useState<{ gsid: string; serialId: string; projectName: string; quantity: string; action: string } | null>(null)

  const connectWallet = async () => {
    // Implement wallet connection logic here
    setIsWalletConnected(true)
  }

  const handleMintFormChange = (field:string, value:string) => {
    setMintForm({ ...mintForm, [field]: value })
  }

  const handleMintSubmit = () => {
    // Fetch project details and set confirmation
    const mockDetails = {
      gsid: 'GSID123456',
      serialId: 'SER987654',
      projectName: 'Amazon Rainforest Conservation',
      quantity: mintForm.quantity,
      action: mintForm.action
    }
    setConfirmationDetails(mockDetails)
    setShowConfirmation(true)
  }

  const confirmMint = async () => {
    // Implement minting logic here
    // For demonstration, we'll just add to token history
    if (confirmationDetails) {
      const newToken = {
        id: Math.random().toString(36).substr(2, 9),
        gsid: confirmationDetails.gsid,
        serialId: confirmationDetails.serialId,
        projectName: confirmationDetails.projectName,
        quantity: confirmationDetails.quantity,
        action: confirmationDetails.action,
        timestamp: new Date().toISOString()
      }
      setTokenHistory([newToken, ...tokenHistory])
    }
    // setTokenHistory([newToken, ...tokenHistory])
    setShowConfirmation(false)
    setMintForm({ projectId: '', quantity: '', action: 'assign' })
  }

  return (
    <div className="min-h-screen">
      <header className="bg-background text-foreground shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
          <Image
            src="/images/logo.jpg" // Use your Earth image
            alt="logo"
            width={50}
            height={10}
            className="rounded-full"
          /> 
            <h1 className="text-2xl font-bold text-gray-800 dark:text-black">CaelumX</h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            {/* <Button variant="ghost" onClick={() => setActiveTab('home')}><Home href="/mintCredits" className="mr-2" />Home</Button> */}
            <Button variant="ghost" onClick={() => setActiveTab('mint')}><CreditCard className="mr-2" />Mint Credits</Button>
            <Button variant="ghost" onClick={() => setActiveTab('history')}><History className="mr-2" />Token History</Button>
            <Button variant="ghost" onClick={() => setActiveTab('about')}><Info className="mr-2" />About Us</Button>
          </nav>
          <Button onClick={connectWallet} disabled={isWalletConnected}>
            <Wallet className="mr-2" />
            {isWalletConnected ? 'Connected' : 'Connect Wallet'}
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <Card>
            <CardHeader>
              <CardTitle>Welcome to CaelumX</CardTitle>
              <CardDescription>Your platform for minting and managing carbon credit tokens</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Get started by connecting your wallet and minting your first carbon credit token.</p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => setActiveTab('mint')}>Start Minting</Button>
            </CardFooter>
          </Card>
        )}

        {activeTab === 'mint' && (
          <Card>
            <CardHeader>
              <CardTitle>Mint Carbon Credits</CardTitle>
              <CardDescription>Create new carbon credit tokens from verified projects</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={(e) => { e.preventDefault(); handleMintSubmit(); }} className="space-y-4">
                <div>
                  <label htmlFor="projectId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Project ID</label>
                  <Select onValueChange={(value) => handleMintFormChange('projectId', value)} value={mintForm.projectId}>
                    <SelectTrigger id="projectId">
                      <SelectValue placeholder="Select a project" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="project1">Amazon Rainforest Conservation</SelectItem>
                      <SelectItem value="project2">Solar Farm Initiative</SelectItem>
                      <SelectItem value="project3">Wind Energy Project</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Quantity of Credits</label>
                  <Input
                    id="quantity"
                    type="number"
                    value={mintForm.quantity}
                    onChange={(e) => handleMintFormChange('quantity', e.target.value)}
                    placeholder="Enter quantity"
                    min="1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Action</label>
                  <div className="mt-2 space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="assign"
                        checked={mintForm.action === 'assign'}
                        onChange={() => handleMintFormChange('action', 'assign')}
                        className="form-radio"
                      />
                      <span className="ml-2">Assign</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="retire"
                        checked={mintForm.action === 'retire'}
                        onChange={() => handleMintFormChange('action', 'retire')}
                        className="form-radio"
                      />
                      <span className="ml-2">Retire</span>
                    </label>
                  </div>
                </div>
                <Button type="submit">Preview and Confirm</Button>
              </form>
            </CardContent>
          </Card>
        )}

        {activeTab === 'history' && (
          <Card>
            <CardHeader>
              <CardTitle>Token History</CardTitle>
              <CardDescription>View all your minted carbon credit tokens</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>GSID</TableHead>
                    <TableHead>Serial ID</TableHead>
                    <TableHead>Project Name</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Timestamp</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tokenHistory.map((token) => (
                    <TableRow key={token.id}>
                      <TableCell>{token.gsid}</TableCell>
                      <TableCell>{token.serialId}</TableCell>
                      <TableCell>{token.projectName}</TableCell>
                      <TableCell>{token.quantity}</TableCell>
                      <TableCell>{token.action}</TableCell>
                      <TableCell>{new Date(token.timestamp).toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {activeTab === 'about' && (
          <Card>
            <CardHeader>
              <CardTitle>About CaelumX</CardTitle>
              <CardDescription>Learn more about our mission and vision</CardDescription>
            </CardHeader>
            <CardContent>
              <p>CaelumX is dedicated to making carbon credit minting and management accessible and efficient. Our platform leverages blockchain technology to ensure transparency and traceability in the carbon credit market.</p>
            </CardContent>
          </Card>
        )}
      </main>

      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Minting</DialogTitle>
            <DialogDescription>Please review the details before minting your carbon credit token.</DialogDescription>
          </DialogHeader>
          {confirmationDetails && (
            <div className="space-y-4">
              <p><strong>GSID:</strong> {confirmationDetails.gsid}</p>
              <p><strong>Serial ID:</strong> {confirmationDetails.serialId}</p>
              <p><strong>Project Name:</strong> {confirmationDetails.projectName}</p>
              <p><strong>Quantity:</strong> {confirmationDetails.quantity}</p>
              <p><strong>Action:</strong> {confirmationDetails.action}</p>
            </div>
          )}
          <DialogFooter>
            <Button onClick={() => setShowConfirmation(false)} variant="outline">Cancel</Button>
            <Button onClick={confirmMint}>Confirm and Mint</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <footer className="bg-background text-foreground shadow-md mt-8">
        <div className="container mx-auto px-4 py-4 text-center text-sm">
          © 2024 CaelumX. All rights reserved.
        </div>
      </footer>
    </div>
  )
}