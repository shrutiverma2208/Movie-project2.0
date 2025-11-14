import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const changePasswordApi = async (currentPassword, newPassword) => {
  
  await new Promise((r) => setTimeout(r, 400))
  
  return { status: 'success' }
}

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()

  const onPasswordChange = async () => {
    if (!currentPassword) {
      toast.warning('Please enter current password')
      return
    }
    if (!newPassword) {
      toast.warning('Please enter new password')
      return
    }
    if (!confirmPassword) {
      toast.warning('Please confirm new password')
      return
    }
    if (newPassword !== confirmPassword) {
      toast.warning('New password and confirm password do not match')
      return
    }

    try {
      const res = await changePasswordApi(currentPassword, newPassword)
      if (res?.status === 'success') {
        toast.success('Password changed successfully')
        
        navigate('/')
      } else {
        toast.error(res?.error || 'Failed to change password')
      }
    } catch (err) {
      toast.error('An error occurred')
    }
  }

  return (
    <>
      <h1 className="page-header">Change Password</h1>
      <div className="passChange-container">
        <div className="mb-3">
          <label htmlFor="">Current Password</label>
          <input
            onChange={(e) => setCurrentPassword(e.target.value)}
            type="password"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">New Password</label>
          <input
            onChange={(e) => setNewPassword(e.target.value)}
            type="password"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Confirm Password</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            className="form-control"
          />
        </div>
        <div className="mb-3" />
        <button onClick={onPasswordChange} className="btn btn-primary">
          Change Password
        </button>
      </div>
    </>
  )
}

export default ChangePassword
