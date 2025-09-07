import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Users, UserCheck, Camera, FileText, Upload } from 'lucide-react';

interface AdminModuleProps {
  activeSubModule: string;
}

export function AdminModule({ activeSubModule }: AdminModuleProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    class: '',
    admissionNumber: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    address: '',
    assignedClasses: [] as string[],
    subjects: [] as string[],
  });
  
  const { toast } = useToast();
  
  const classes = ['Grade 9-A', 'Grade 9-B', 'Grade 10-A', 'Grade 10-B', 'Grade 11-A', 'Grade 11-B', 'Grade 12-A', 'Grade 12-B'];
  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'History', 'Geography'];

  const handleSubmit = (type: 'student' | 'teacher') => {
    toast({
      title: `${type === 'student' ? 'Student' : 'Teacher'} Profile Created`,
      description: `${formData.name}'s profile has been created and sent for approval.`,
      variant: "default"
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      class: '',
      admissionNumber: '',
      parentName: '',
      parentEmail: '',
      parentPhone: '',
      address: '',
      assignedClasses: [],
      subjects: [],
    });
  };

  const renderCreateStudent = () => (
    <div className="space-y-6 fade-in">
      <div className="text-center">
        <h2 className="module-header">Create Student Profile</h2>
        <p className="text-muted-foreground">Add new student admission details and parent information</p>
      </div>

      <Card className="form-section">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="w-5 h-5 mr-2" />
            Student Information
          </CardTitle>
          <CardDescription>Enter student's personal and academic details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="form-label">Student Name</Label>
              <Input
                placeholder="Enter full name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="professional-dropdown"
              />
            </div>
            <div className="space-y-2">
              <Label className="form-label">Admission Number</Label>
              <Input
                placeholder="Enter admission number"
                value={formData.admissionNumber}
                onChange={(e) => setFormData({...formData, admissionNumber: e.target.value})}
                className="professional-dropdown"
              />
            </div>
            <div className="space-y-2">
              <Label className="form-label">Email Address</Label>
              <Input
                type="email"
                placeholder="student@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="professional-dropdown"
              />
            </div>
            <div className="space-y-2">
              <Label className="form-label">Phone Number</Label>
              <Input
                type="tel"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="professional-dropdown"
              />
            </div>
            <div className="space-y-2">
              <Label className="form-label">Assigned Class</Label>
              <Select value={formData.class} onValueChange={(value) => setFormData({...formData, class: value})}>
                <SelectTrigger className="professional-dropdown">
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  {classes.map((cls) => (
                    <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="form-label">Address</Label>
            <Textarea
              placeholder="Enter complete address"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              className="min-h-[80px]"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Parent/Guardian Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="form-label">Parent/Guardian Name</Label>
                <Input
                  placeholder="Enter parent's name"
                  value={formData.parentName}
                  onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                  className="professional-dropdown"
                />
              </div>
              <div className="space-y-2">
                <Label className="form-label">Parent Email</Label>
                <Input
                  type="email"
                  placeholder="parent@example.com"
                  value={formData.parentEmail}
                  onChange={(e) => setFormData({...formData, parentEmail: e.target.value})}
                  className="professional-dropdown"
                />
              </div>
              <div className="space-y-2">
                <Label className="form-label">Parent Phone</Label>
                <Input
                  type="tel"
                  placeholder="Enter parent's phone"
                  value={formData.parentPhone}
                  onChange={(e) => setFormData({...formData, parentPhone: e.target.value})}
                  className="professional-dropdown"
                />
              </div>
            </div>
          </div>

          <Button 
            variant="professional" 
            className="w-full"
            onClick={() => handleSubmit('student')}
          >
            Create Student Profile
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderCreateTeacher = () => (
    <div className="space-y-6 fade-in">
      <div className="text-center">
        <h2 className="module-header">Create Teacher Profile</h2>
        <p className="text-muted-foreground">Add new teacher with class and subject assignments</p>
      </div>

      <Card className="form-section">
        <CardHeader>
          <CardTitle className="flex items-center">
            <UserCheck className="w-5 h-5 mr-2" />
            Teacher Information
          </CardTitle>
          <CardDescription>Enter teacher's details and assignments</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="form-label">Teacher Name</Label>
              <Input
                placeholder="Enter full name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="professional-dropdown"
              />
            </div>
            <div className="space-y-2">
              <Label className="form-label">Email Address</Label>
              <Input
                type="email"
                placeholder="teacher@school.edu"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="professional-dropdown"
              />
            </div>
            <div className="space-y-2">
              <Label className="form-label">Phone Number</Label>
              <Input
                type="tel"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="professional-dropdown"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Class & Subject Assignments</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="form-label">Assigned Classes</Label>
                <Select onValueChange={(value) => {
                  if (!formData.assignedClasses.includes(value)) {
                    setFormData({...formData, assignedClasses: [...formData.assignedClasses, value]});
                  }
                }}>
                  <SelectTrigger className="professional-dropdown">
                    <SelectValue placeholder="Select classes to assign" />
                  </SelectTrigger>
                  <SelectContent>
                    {classes.map((cls) => (
                      <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.assignedClasses.map((cls, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                      {cls}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label className="form-label">Teaching Subjects</Label>
                <Select onValueChange={(value) => {
                  if (!formData.subjects.includes(value)) {
                    setFormData({...formData, subjects: [...formData.subjects, value]});
                  }
                }}>
                  <SelectTrigger className="professional-dropdown">
                    <SelectValue placeholder="Select subjects to teach" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.subjects.map((subject, index) => (
                    <span key={index} className="bg-accent/10 text-accent px-2 py-1 rounded text-sm">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Button 
            variant="professional" 
            className="w-full"
            onClick={() => handleSubmit('teacher')}
          >
            Create Teacher Profile
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderUploadPhotos = () => (
    <div className="space-y-6 fade-in">
      <div className="text-center">
        <h2 className="module-header">Upload Event Photos</h2>
        <p className="text-muted-foreground">Add photos from school events and activities</p>
      </div>

      <Card className="form-section">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Camera className="w-5 h-5 mr-2" />
            Event Photo Upload
          </CardTitle>
          <CardDescription>Upload photos with event details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
            <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-lg font-medium mb-2">Upload Event Photos</p>
            <p className="text-muted-foreground mb-4">Drag and drop photos here, or click to browse</p>
            <Button variant="outline">Choose Files</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="form-label">Event Name</Label>
              <Input placeholder="Enter event name" className="professional-dropdown" />
            </div>
            <div className="space-y-2">
              <Label className="form-label">Event Date</Label>
              <Input type="date" className="professional-dropdown" />
            </div>
            <div className="space-y-2">
              <Label className="form-label">Participants Count</Label>
              <Input type="number" placeholder="Number of participants" className="professional-dropdown" />
            </div>
            <div className="space-y-2">
              <Label className="form-label">Attendees Count</Label>
              <Input type="number" placeholder="Number of attendees" className="professional-dropdown" />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="form-label">Event Description</Label>
            <Textarea placeholder="Describe the event..." className="min-h-[100px]" />
          </div>

          <Button variant="professional" className="w-full">
            Upload Photos
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderUploadCirculars = () => (
    <div className="space-y-6 fade-in">
      <div className="text-center">
        <h2 className="module-header">Upload Circulars</h2>
        <p className="text-muted-foreground">Share important announcements and notices</p>
      </div>

      <Card className="form-section">
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Circular Upload
          </CardTitle>
          <CardDescription>Create and distribute official circulars</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="form-label">Circular Title</Label>
              <Input placeholder="Enter circular title" className="professional-dropdown" />
            </div>
            <div className="space-y-2">
              <Label className="form-label">Circular Type</Label>
              <Select>
                <SelectTrigger className="professional-dropdown">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="holiday">Holiday Notice</SelectItem>
                  <SelectItem value="exam">Examination Notice</SelectItem>
                  <SelectItem value="event">Event Announcement</SelectItem>
                  <SelectItem value="general">General Notice</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="form-label">Priority Level</Label>
              <Select>
                <SelectTrigger className="professional-dropdown">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High Priority</SelectItem>
                  <SelectItem value="medium">Medium Priority</SelectItem>
                  <SelectItem value="low">Low Priority</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="form-label">Target Audience</Label>
              <Select>
                <SelectTrigger className="professional-dropdown">
                  <SelectValue placeholder="Select audience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Students & Parents</SelectItem>
                  <SelectItem value="students">Students Only</SelectItem>
                  <SelectItem value="parents">Parents Only</SelectItem>
                  <SelectItem value="teachers">Teachers Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="form-label">Circular Content</Label>
            <Textarea placeholder="Enter the detailed content of the circular..." className="min-h-[150px]" />
          </div>

          <Button variant="professional" className="w-full">
            Upload Circular
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  switch (activeSubModule) {
    case 'create-student':
      return renderCreateStudent();
    case 'create-teacher':
      return renderCreateTeacher();
    case 'upload-photos':
      return renderUploadPhotos();
    case 'upload-circulars':
      return renderUploadCirculars();
    default:
      return renderCreateStudent();
  }
}