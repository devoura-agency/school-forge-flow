import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Upload, GraduationCap, CheckCircle, Users } from 'lucide-react';

interface TeacherModuleProps {
  activeSubModule: string;
}

export function TeacherModule({ activeSubModule }: TeacherModuleProps) {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedStudent, setSelectedStudent] = useState('');
  const [marks, setMarks] = useState('');
  const [remarks, setRemarks] = useState('');
  const { toast } = useToast();

  const myClasses = ['Grade 10-A', 'Grade 10-B'];
  const subjects = ['Mathematics', 'Physics', 'Chemistry'];
  const students = {
    'Grade 10-A': ['John Doe', 'Emma Wilson', 'Michael Brown', 'Sarah Davis'],
    'Grade 10-B': ['Alex Johnson', 'Maria Garcia', 'David Lee', 'Jessica Taylor']
  };

  const mockAttendanceData = [
    { name: 'John Doe', admissionNo: 'STU001', status: 'Present' },
    { name: 'Emma Wilson', admissionNo: 'STU002', status: 'Present' },
    { name: 'Michael Brown', admissionNo: 'STU003', status: 'Absent' },
    { name: 'Sarah Davis', admissionNo: 'STU004', status: 'Present' },
  ];

  const handleAttendanceSubmit = () => {
    toast({
      title: "Attendance Uploaded",
      description: `Attendance for ${selectedClass} has been successfully uploaded.`,
      variant: "default"
    });
  };

  const handleScoreSubmit = () => {
    if (!selectedClass || !selectedSubject || !selectedStudent || !marks) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Scores Uploaded",
      description: `Exam scores for ${selectedStudent} have been successfully uploaded.`,
      variant: "default"
    });

    // Reset form
    setSelectedClass('');
    setSelectedSubject('');
    setSelectedStudent('');
    setMarks('');
    setRemarks('');
  };

  const renderUploadAttendance = () => (
    <div className="space-y-6 fade-in">
      <div className="text-center">
        <h2 className="module-header">Upload Daily Attendance</h2>
        <p className="text-muted-foreground">Mark attendance for your assigned classes</p>
      </div>

      <Card className="form-section">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Class Attendance - {new Date().toLocaleDateString()}
          </CardTitle>
          <CardDescription>Select class and mark student attendance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label className="form-label">Select Class</Label>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger className="professional-dropdown">
                <SelectValue placeholder="Choose your assigned class" />
              </SelectTrigger>
              <SelectContent>
                {myClasses.map((className) => (
                  <SelectItem key={className} value={className}>
                    {className}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedClass && (
            <Card className="bg-muted/30">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Students in {selectedClass}
                </h3>
                <div className="space-y-3">
                  {mockAttendanceData.map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-card rounded-lg">
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-muted-foreground">{student.admissionNo}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="success" size="sm">Present</Button>
                        <Button variant="outline" size="sm">Absent</Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="professional" 
                  className="w-full mt-4"
                  onClick={handleAttendanceSubmit}
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Submit Attendance
                </Button>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );

  const renderUploadScores = () => (
    <div className="space-y-6 fade-in">
      <div className="text-center">
        <h2 className="module-header">Upload Exam Scores</h2>
        <p className="text-muted-foreground">Upload examination results for your students</p>
      </div>

      <Card className="form-section">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Upload className="w-5 h-5 mr-2" />
            Student Score Entry
          </CardTitle>
          <CardDescription>Enter exam scores and remarks for individual students</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="form-label">Select Class</Label>
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger className="professional-dropdown">
                  <SelectValue placeholder="Choose class to upload scores for" />
                </SelectTrigger>
                <SelectContent>
                  {myClasses.map((className) => (
                    <SelectItem key={className} value={className}>
                      {className}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="form-label">Select Subject</Label>
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger className="professional-dropdown">
                  <SelectValue placeholder="Choose subject for scores" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject}>
                      {subject}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {selectedClass && (
            <div className="space-y-2">
              <Label className="form-label">Select Student</Label>
              <Select value={selectedStudent} onValueChange={setSelectedStudent}>
                <SelectTrigger className="professional-dropdown">
                  <SelectValue placeholder="Choose student to enter scores for" />
                </SelectTrigger>
                <SelectContent>
                  {(students[selectedClass as keyof typeof students] || []).map((student) => (
                    <SelectItem key={student} value={student}>
                      {student}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {selectedStudent && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="form-label">Marks Obtained</Label>
                <Input
                  type="number"
                  placeholder="Enter marks (out of 100)"
                  value={marks}
                  onChange={(e) => setMarks(e.target.value)}
                  className="professional-dropdown"
                  min="0"
                  max="100"
                />
              </div>

              <div className="space-y-2">
                <Label className="form-label">Grade</Label>
                <Input
                  value={marks ? (parseInt(marks) >= 90 ? 'A+' : parseInt(marks) >= 80 ? 'A' : parseInt(marks) >= 70 ? 'B' : parseInt(marks) >= 60 ? 'C' : 'F') : ''}
                  readOnly
                  className="professional-dropdown bg-muted"
                />
              </div>
            </div>
          )}

          {selectedStudent && (
            <div className="space-y-2">
              <Label className="form-label">Remarks (Optional)</Label>
              <Textarea
                placeholder="Enter any remarks or feedback for the student"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
          )}

          {selectedStudent && (
            <Button 
              variant="professional" 
              className="w-full"
              onClick={handleScoreSubmit}
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload Score
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );

  const renderMyClasses = () => (
    <div className="space-y-6 fade-in">
      <div className="text-center">
        <h2 className="module-header">My Classes</h2>
        <p className="text-muted-foreground">Overview of your assigned classes and students</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {myClasses.map((className, index) => (
          <Card key={index} className="professional-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                {className}
              </CardTitle>
              <CardDescription>Class details and student information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Total Students:</span>
                <Badge variant="secondary">{students[className as keyof typeof students]?.length || 0}</Badge>
              </div>
              
              <div className="space-y-2">
                <p className="font-semibold text-sm">Students:</p>
                <div className="grid grid-cols-1 gap-2">
                  {(students[className as keyof typeof students] || []).map((student, studentIndex) => (
                    <div key={studentIndex} className="flex items-center justify-between p-2 bg-muted rounded">
                      <span className="text-sm">{student}</span>
                      <Badge variant="outline" className="text-xs">STU{String(studentIndex + 1).padStart(3, '0')}</Badge>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-2 mt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  View Details
                </Button>
                <Button variant="professional" size="sm" className="flex-1">
                  Take Attendance
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  switch (activeSubModule) {
    case 'upload-attendance':
      return renderUploadAttendance();
    case 'upload-scores':
      return renderUploadScores();
    case 'my-classes':
      return renderMyClasses();
    default:
      return renderUploadAttendance();
  }
}