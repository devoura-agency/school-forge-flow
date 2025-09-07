import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Trophy, Gift } from 'lucide-react';
import schoolHero from '@/assets/school-hero.jpg';
import studentsStudying from '@/assets/students-studying.jpg';
import scienceFair from '@/assets/science-fair.jpg';
import sportsDay from '@/assets/sports-day.jpg';

export function HomePage() {
  const galleryImages = [
    { src: studentsStudying, title: 'Students in Modern Classroom', event: 'Academic Excellence Program' },
    { src: scienceFair, title: 'Annual Science Fair 2024', event: 'Science Fair Competition' },
    { src: sportsDay, title: 'Sports Day Athletics', event: 'Annual Sports Day' },
  ];

  const activities = [
    {
      title: 'Annual Science Fair 2024',
      date: 'March 15, 2024',
      participants: 150,
      attendees: 500,
      description: 'Students showcased innovative science projects with awards in multiple categories.',
    },
    {
      title: 'Sports Day Championship',
      date: 'February 28, 2024',
      participants: 200,
      attendees: 800,
      description: 'Inter-house athletics competition featuring track and field events.',
    },
    {
      title: 'Cultural Festival',
      date: 'January 20, 2024',
      participants: 180,
      attendees: 600,
      description: 'Celebration of diverse cultures through music, dance, and art performances.',
    },
  ];

  const topStudents = [
    { name: 'Emma Thompson', class: 'Grade 10-A', score: 98, subject: 'Mathematics' },
    { name: 'Raj Patel', class: 'Grade 10-B', score: 96, subject: 'Physics' },
    { name: 'Sofia Chen', class: 'Grade 10-C', score: 94, subject: 'Chemistry' },
  ];

  const birthdays = [
    { name: 'Alex Johnson', class: 'Grade 9-A', date: 'Today' },
    { name: 'Maya Rodriguez', class: 'Grade 11-B', date: 'Tomorrow' },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative rounded-2xl overflow-hidden">
        <img 
          src={schoolHero} 
          alt="School Building" 
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 flex items-center justify-center">
          <div className="text-center text-white space-y-4 max-w-2xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold">Welcome to EduManage</h1>
            <p className="text-xl md:text-2xl">Empowering Education Through Technology</p>
            <Button variant="hero" size="xl" className="mt-6">
              Explore Our Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-foreground">Photo Gallery</h2>
          <p className="text-muted-foreground">Capturing memorable moments from our school events</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card key={index} className="professional-card group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">{image.title}</h3>
                  <p className="text-sm text-white/80">{image.event}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Activities Section */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-foreground">Recent Activities</h2>
          <p className="text-muted-foreground">Highlights from our recent school events and programs</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <Card key={index} className="professional-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-lg">{activity.title}</span>
                  <Badge variant="secondary">Event</Badge>
                </CardTitle>
                <CardDescription className="flex items-center space-x-4 text-sm">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {activity.date}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{activity.description}</p>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1 text-primary" />
                    {activity.participants} Participants
                  </span>
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-accent" />
                    {activity.attendees} Attendees
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Updates Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Students */}
        <Card className="professional-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Trophy className="w-5 h-5 mr-2 text-accent" />
              Top Performers
            </CardTitle>
            <CardDescription>Outstanding students from recent examinations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {topStudents.map((student, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold">{student.name}</p>
                    <p className="text-sm text-muted-foreground">{student.class} • {student.subject}</p>
                  </div>
                </div>
                <Badge variant="success" className="bg-success text-success-foreground">
                  {student.score}%
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Birthday Wishes */}
        <Card className="professional-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Gift className="w-5 h-5 mr-2 text-accent" />
              Birthday Wishes
            </CardTitle>
            <CardDescription>Celebrating our students' special days</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {birthdays.map((birthday, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-accent-light rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center text-white">
                    🎂
                  </div>
                  <div>
                    <p className="font-semibold">{birthday.name}</p>
                    <p className="text-sm text-muted-foreground">{birthday.class}</p>
                  </div>
                </div>
                <Badge variant="outline" className="border-accent text-accent">
                  {birthday.date}
                </Badge>
              </div>
            ))}
            <div className="text-center pt-2">
              <p className="text-sm text-muted-foreground">🎉 Wishing all our birthday celebrants a wonderful day! 🎉</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}