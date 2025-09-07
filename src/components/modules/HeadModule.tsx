import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { UserCheck, Settings, BookOpen, Check, X, Users, Eye } from 'lucide-react';

interface HeadModuleProps {
  activeSubModule: string;
}

export function HeadModule({ activeSubModule }: HeadModuleProps) {
  const { toast } = useToast();
  
  const pendingApprovals = [
    {
      id: 1,
      type: 'student',
      name: 'Alex Johnson',
      requestedBy: 'Admin001',
      date: '2024-01-15',
      class: 'Grade 10-A',
      admissionNumber: 'STU025'
    },
    {
      id: 2,
      type: 'teacher',
      name: 'Ms. Rebecca Smith',
      requestedBy: 'Admin001',
      date: '2024-01-14',
      subjects: ['Mathematics', 'Physics'],
      classes: ['Grade 11-A', 'Grade 11-B']
    },
    {
      id: 3,
      type: 'student',
      name: 'Maria Garcia',
      requestedBy: 'Admin002',
      date: '2024-01-13',
      class: 'Grade 9-B',
      admissionNumber: 'STU026'
    }
  ];

  const admins = [
    {
      id: 1,
      name: 'Mr. David Brown',
      email: 'david.brown@school.edu',
      username: 'ADM001',
      status: 'active',
      createdDate: '2023-09-01'
    },
    {
      id: 2,
      name: 'Ms. Jennifer Wilson',
      email: 'jennifer.wilson@school.edu',
      username: 'ADM002',
      status: 'active',
      createdDate: '2023-10-15'
    }
  ];

  const systemStats = {
    totalStudents: 1250,
    totalTeachers: 85,
    totalAdmins: 2,
    totalClasses: 24,
    pendingApprovals: pendingApprovals.length,
    monthlyLogins: 2840
  };

  const handleApproval = (id: number, action: 'approve' | 'reject') => {
    toast({
      title: action === 'approve' ? "Request Approved" : "Request Rejected",
      description: `The profile creation request has been ${action}d.`,
      variant: action === 'approve' ? "default" : "destructive"
    });
  };

  const renderApprovals = () => (
    <div className="space-y-6 fade-in">
      <div className="text-center">
        <h2 className="module-header">Pending Approvals</h2>
        <p className="text-muted-foreground">Review and approve profile creation requests</p>
      </div>

      <div className="space-y-4">
        {pendingApprovals.map((request) => (
          <Card key={request.id} className="professional-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <UserCheck className="w-5 h-5 mr-2" />
                  {request.type === 'student' ? 'Student' : 'Teacher'} Profile Request
                </CardTitle>
                <Badge variant={request.type === 'student' ? 'secondary' : 'outline'}>
                  {request.type}
                </Badge>
              </div>
              <CardDescription>
                Requested by {request.requestedBy} on {request.date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Name</p>
                    <p className="text-lg font-semibold">{request.name}</p>
                  </div>
                  {request.type === 'student' ? (
                    <>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Admission Number</p>
                        <p className="font-medium">{request.admissionNumber}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Class</p>
                        <p className="font-medium">{request.class}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Subjects</p>
                        <p className="font-medium">{request.subjects?.join(', ')}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Classes</p>
                        <p className="font-medium">{request.classes?.join(', ')}</p>
                      </div>
                    </>
                  )}
                </div>
                
                <div className="flex space-x-2 pt-4">
                  <Button 
                    variant="success" 
                    className="flex-1"
                    onClick={() => handleApproval(request.id, 'approve')}
                  >
                    <Check className="w-4 h-4 mr-2" />
                    Approve
                  </Button>
                  <Button 
                    variant="destructive" 
                    className="flex-1"
                    onClick={() => handleApproval(request.id, 'reject')}
                  >
                    <X className="w-4 h-4 mr-2" />
                    Reject
                  </Button>
                  <Button variant="outline">
                    <Eye className="w-4 h-4 mr-2" />
                    Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderAdminManagement = () => (
    <div className="space-y-6 fade-in">
      <div className="text-center">
        <h2 className="module-header">Admin Management</h2>
        <p className="text-muted-foreground">Manage administrator accounts and permissions</p>
      </div>

      <Card className="form-section">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="w-5 h-5 mr-2" />
            Create New Admin
          </CardTitle>
          <CardDescription>Add a new administrator to the system</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="form-label">Full Name</Label>
              <Input placeholder="Enter admin name" className="professional-dropdown" />
            </div>
            <div className="space-y-2">
              <Label className="form-label">Email Address</Label>
              <Input type="email" placeholder="admin@school.edu" className="professional-dropdown" />
            </div>
            <div className="space-y-2">
              <Label className="form-label">Username</Label>
              <Input placeholder="ADM003" className="professional-dropdown" />
            </div>
            <div className="space-y-2">
              <Label className="form-label">Initial Password</Label>
              <Input type="password" placeholder="Generate password" className="professional-dropdown" />
            </div>
          </div>
          <Button variant="professional" className="w-full">
            Create Admin Account
          </Button>
        </CardContent>
      </Card>

      <Card className="professional-card">
        <CardHeader>
          <CardTitle>Current Administrators</CardTitle>
          <CardDescription>Active administrator accounts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {admins.map((admin) => (
              <div key={admin.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                    {admin.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold">{admin.name}</p>
                    <p className="text-sm text-muted-foreground">{admin.email}</p>
                    <p className="text-xs text-muted-foreground">Username: {admin.username}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant={admin.status === 'active' ? 'success' : 'secondary'}>
                    {admin.status}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">Since {admin.createdDate}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-6 fade-in">
      <div className="text-center">
        <h2 className="module-header">System Overview</h2>
        <p className="text-muted-foreground">Complete system statistics and management overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="professional-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{systemStats.totalStudents}</div>
            <p className="text-xs text-muted-foreground">
              Active student profiles
            </p>
          </CardContent>
        </Card>

        <Card className="professional-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Teachers</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{systemStats.totalTeachers}</div>
            <p className="text-xs text-muted-foreground">
              Active teaching staff
            </p>
          </CardContent>
        </Card>

        <Card className="professional-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Classes</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{systemStats.totalClasses}</div>
            <p className="text-xs text-muted-foreground">
              Academic classes
            </p>
          </CardContent>
        </Card>

        <Card className="professional-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Administrators</CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{systemStats.totalAdmins}</div>
            <p className="text-xs text-muted-foreground">
              System administrators
            </p>
          </CardContent>
        </Card>

        <Card className="professional-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">{systemStats.pendingApprovals}</div>
            <p className="text-xs text-muted-foreground">
              Awaiting your approval
            </p>
          </CardContent>
        </Card>

        <Card className="professional-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Logins</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{systemStats.monthlyLogins}</div>
            <p className="text-xs text-muted-foreground">
              System access this month
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="professional-card">
        <CardHeader>
          <CardTitle>Recent System Activity</CardTitle>
          <CardDescription>Latest activities across the school management system</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: 'Student profile created', user: 'Admin001', time: '2 hours ago' },
              { action: 'Teacher attendance uploaded', user: 'Ms. Sarah Wilson', time: '4 hours ago' },
              { action: 'Circular distributed', user: 'Admin002', time: '1 day ago' },
              { action: 'Exam scores uploaded', user: 'Mr. John Smith', time: '2 days ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">by {activity.user}</p>
                </div>
                <Badge variant="outline">{activity.time}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  switch (activeSubModule) {
    case 'approvals':
      return renderApprovals();
    case 'admin-management':
      return renderAdminManagement();
    case 'overview':
      return renderOverview();
    default:
      return renderApprovals();
  }
}