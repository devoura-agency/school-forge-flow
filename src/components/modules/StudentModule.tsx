import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Calendar, BookOpen, CreditCard, Image, Bell, CheckCircle, XCircle, Clock } from 'lucide-react';

interface StudentModuleProps {
  activeSubModule: string;
}

export function StudentModule({ activeSubModule }: StudentModuleProps) {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedExamType, setSelectedExamType] = useState('');

  const mockAttendance = [
    { date: '2024-03-15', subject: 'Mathematics', status: 'Present', time: '09:00 AM' },
    { date: '2024-03-15', subject: 'Physics', status: 'Present', time: '10:30 AM' },
    { date: '2024-03-15', subject: 'Chemistry', status: 'Absent', time: '12:00 PM' },
    { date: '2024-03-14', subject: 'English', status: 'Present', time: '09:00 AM' },
    { date: '2024-03-14', subject: 'History', status: 'Present', time: '11:00 AM' },
  ];

  const mockScores = [
    { exam: 'Mid-term Exam', subject: 'Mathematics', score: 95, maxScore: 100, grade: 'A+', date: '2024-03-10' },
    { exam: 'Mid-term Exam', subject: 'Physics', score: 88, maxScore: 100, grade: 'A', date: '2024-03-08' },
    { exam: 'Mid-term Exam', subject: 'Chemistry', score: 92, maxScore: 100, grade: 'A+', date: '2024-03-06' },
    { exam: 'Unit Test', subject: 'English', score: 85, maxScore: 100, grade: 'A', date: '2024-02-28' },
    { exam: 'Unit Test', subject: 'History', score: 90, maxScore: 100, grade: 'A+', date: '2024-02-26' },
  ];

  const mockFees = [
    { description: 'Tuition Fee - March 2024', amount: 1500, status: 'Paid', dueDate: '2024-03-01', paidDate: '2024-02-28' },
    { description: 'Library Fee - March 2024', amount: 50, status: 'Paid', dueDate: '2024-03-01', paidDate: '2024-02-28' },
    { description: 'Laboratory Fee - April 2024', amount: 200, status: 'Due', dueDate: '2024-04-01', paidDate: null },
    { description: 'Transportation Fee - April 2024', amount: 300, status: 'Due', dueDate: '2024-04-05', paidDate: null },
  ];

  const mockNotifications = [
    { title: 'Fee Payment Confirmation', message: 'Your March 2024 tuition fee payment has been confirmed.', type: 'success', date: '2024-03-01' },
    { title: 'Absence Notification', message: 'You were marked absent in Chemistry class on March 15, 2024.', type: 'warning', date: '2024-03-15' },
    { title: 'Exam Reminder', message: 'Mid-term exams starting April 15, 2024. Fee payment required before April 13.', type: 'info', date: '2024-03-10' },
  ];

  const renderAttendance = () => (
    <div className="space-y-6 fade-in">
      <div className="text-center">
        <h2 className="module-header">My Attendance</h2>
        <p className="text-muted-foreground">View your daily attendance records</p>
      </div>

      <Card className="professional-card">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Recent Attendance
          </CardTitle>
          <CardDescription>Your attendance for the last 7 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockAttendance.map((record, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${record.status === 'Present' ? 'bg-success' : 'bg-destructive'}`} />
                  <div>
                    <p className="font-semibold">{record.subject}</p>
                    <p className="text-sm text-muted-foreground">{record.date} at {record.time}</p>
                  </div>
                </div>
                <Badge variant={record.status === 'Present' ? 'success' : 'destructive'}>
                  {record.status === 'Present' ? (
                    <CheckCircle className="w-3 h-3 mr-1" />
                  ) : (
                    <XCircle className="w-3 h-3 mr-1" />
                  )}
                  {record.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderScores = () => (
    <div className="space-y-6 fade-in">
      <div className="text-center">
        <h2 className="module-header">Test Scores</h2>
        <p className="text-muted-foreground">View and filter your examination results</p>
      </div>

      {/* Filter Section */}
      <Card className="form-section">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label className="form-label">Academic Year</Label>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="professional-dropdown">
                <SelectValue placeholder="Select Academic Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023-2024">2023-2024</SelectItem>
                <SelectItem value="2022-2023">2022-2023</SelectItem>
                <SelectItem value="2021-2022">2021-2022</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="form-label">Class</Label>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger className="professional-dropdown">
                <SelectValue placeholder="Select Class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="grade-10-a">Grade 10-A</SelectItem>
                <SelectItem value="grade-10-b">Grade 10-B</SelectItem>
                <SelectItem value="grade-9-a">Grade 9-A</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="form-label">Exam Type</Label>
            <Select value={selectedExamType} onValueChange={setSelectedExamType}>
              <SelectTrigger className="professional-dropdown">
                <SelectValue placeholder="Select Exam Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mid-term">Mid-term Exam</SelectItem>
                <SelectItem value="final">Final Exam</SelectItem>
                <SelectItem value="unit-test">Unit Test</SelectItem>
                <SelectItem value="quiz">Quiz</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button variant="professional" className="mt-4">
          Apply Filters
        </Button>
      </Card>

      {/* Scores Table */}
      <Card className="professional-card">
        <CardHeader>
          <CardTitle className="flex items-center">
            <BookOpen className="w-5 h-5 mr-2" />
            Examination Results
          </CardTitle>
          <CardDescription>Your academic performance across all subjects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="professional-table">
              <thead>
                <tr>
                  <th>Exam Type</th>
                  <th>Subject</th>
                  <th>Score</th>
                  <th>Grade</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {mockScores.map((score, index) => (
                  <tr key={index}>
                    <td>{score.exam}</td>
                    <td>{score.subject}</td>
                    <td>
                      <span className="font-semibold">{score.score}/{score.maxScore}</span>
                      <span className="text-sm text-muted-foreground ml-2">
                        ({((score.score / score.maxScore) * 100).toFixed(1)}%)
                      </span>
                    </td>
                    <td>
                      <Badge variant={score.score >= 90 ? 'success' : score.score >= 80 ? 'warning' : 'secondary'}>
                        {score.grade}
                      </Badge>
                    </td>
                    <td>{score.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderFees = () => (
    <div className="space-y-6 fade-in">
      <div className="text-center">
        <h2 className="module-header">Fee Status</h2>
        <p className="text-muted-foreground">Track your fee payments and due amounts</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockFees.map((fee, index) => (
          <Card key={index} className={`professional-card ${fee.status === 'Due' ? 'border-warning' : 'border-success'}`}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  {fee.description}
                </span>
                <Badge variant={fee.status === 'Paid' ? 'success' : 'warning'}>
                  {fee.status === 'Paid' ? (
                    <CheckCircle className="w-3 h-3 mr-1" />
                  ) : (
                    <Clock className="w-3 h-3 mr-1" />
                  )}
                  {fee.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount:</span>
                  <span className="font-semibold text-lg">${fee.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Due Date:</span>
                  <span>{fee.dueDate}</span>
                </div>
                {fee.paidDate && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Paid Date:</span>
                    <span className="text-success">{fee.paidDate}</span>
                  </div>
                )}
              </div>
              {fee.status === 'Due' && (
                <Button variant="professional" className="w-full mt-4">
                  Pay Now
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-6 fade-in">
      <div className="text-center">
        <h2 className="module-header">Notifications</h2>
        <p className="text-muted-foreground">Stay updated with important announcements</p>
      </div>

      <div className="space-y-4">
        {mockNotifications.map((notification, index) => (
          <Card key={index} className="professional-card">
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <div className={`p-2 rounded-full ${
                  notification.type === 'success' ? 'bg-success/10 text-success' :
                  notification.type === 'warning' ? 'bg-warning/10 text-warning' :
                  'bg-primary/10 text-primary'
                }`}>
                  <Bell className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{notification.title}</h3>
                  <p className="text-muted-foreground mt-1">{notification.message}</p>
                  <p className="text-sm text-muted-foreground mt-2">{notification.date}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  switch (activeSubModule) {
    case 'attendance':
      return renderAttendance();
    case 'scores':
      return renderScores();
    case 'fees':
      return renderFees();
    case 'notifications':
      return renderNotifications();
    default:
      return renderAttendance();
  }
}