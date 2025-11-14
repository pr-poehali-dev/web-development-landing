import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const services = [
    {
      icon: "Globe",
      title: "Веб-сайты",
      description: "Современные адаптивные сайты с уникальным дизайном и высокой производительностью",
      price: "от 50 000 ₽",
    },
    {
      icon: "ShoppingCart",
      title: "Интернет-магазины",
      description: "Полнофункциональные e-commerce решения с интеграцией платёжных систем",
      price: "от 120 000 ₽",
    },
    {
      icon: "LayoutDashboard",
      title: "CRM-системы",
      description: "Индивидуальные системы управления клиентами и автоматизации бизнес-процессов",
      price: "от 200 000 ₽",
    },
    {
      icon: "MessageSquare",
      title: "Чат-боты",
      description: "Умные боты для Telegram, WhatsApp и веб-сайтов с AI интеграцией",
      price: "от 30 000 ₽",
    },
  ];

  const cases = [
    {
      title: "Интернет-магазин электроники",
      description: "Увеличение конверсии на 45% за 3 месяца",
      image: "https://cdn.poehali.dev/projects/834ec948-078e-4902-92b7-6245c8973af4/files/17dbe615-d42f-4a2d-b0f7-2108bcc94b4d.jpg",
      tech: ["React", "Node.js", "PostgreSQL"],
    },
    {
      title: "CRM для строительной компании",
      description: "Автоматизация работы 50+ сотрудников",
      image: "https://cdn.poehali.dev/projects/834ec948-078e-4902-92b7-6245c8973af4/files/e9e9f525-eba0-40ab-add5-177e820a9f01.jpg",
      tech: ["TypeScript", "Python", "Docker"],
    },
    {
      title: "Корпоративный сайт",
      description: "Рост органического трафика на 120%",
      image: "https://cdn.poehali.dev/projects/834ec948-078e-4902-92b7-6245c8973af4/files/e0d63d45-0cba-417c-a1e8-6d554f061b0c.jpg",
      tech: ["Next.js", "Tailwind", "SEO"],
    },
  ];

  const testimonials = [
    {
      name: "Алексей Петров",
      position: "CEO, TechStart",
      text: "Команда создала идеальный сайт для нашего стартапа. Профессионализм на высшем уровне!",
      rating: 5,
    },
    {
      name: "Мария Соколова",
      position: "Владелец интернет-магазина",
      text: "Новый магазин окупился за 2 месяца. Отличная работа с интеграциями и UX!",
      rating: 5,
    },
    {
      name: "Дмитрий Иванов",
      position: "Директор по маркетингу",
      text: "CRM-система полностью автоматизировала наши процессы. Рекомендую!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary flex items-center gap-2">
            <Icon name="Code2" size={28} />
            <span>WebStudio</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button>
            <Icon name="Phone" size={18} className="mr-2" />
            Связаться
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Создаём
                <span className="text-primary block">цифровые решения</span>
                будущего
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Разрабатываем веб-сайты, интернет-магазины, CRM-системы и чат-боты с использованием современных технологий
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button size="lg" className="group">
                  Начать проект
                  <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Наши кейсы
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-glow"></div>
              <img
                src="https://cdn.poehali.dev/projects/834ec948-078e-4902-92b7-6245c8973af4/files/e0d63d45-0cba-417c-a1e8-6d554f061b0c.jpg"
                alt="Веб-разработка"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">
              Полный спектр решений для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {service.description}
                  </p>
                  <div className="text-primary font-bold text-lg">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио и кейсы</h2>
            <p className="text-xl text-muted-foreground">
              Проекты, которыми мы гордимся
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:border-primary transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>
                <CardContent className="pt-4">
                  <h3 className="text-xl font-bold mb-2">{caseItem.title}</h3>
                  <p className="text-muted-foreground mb-4">{caseItem.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {caseItem.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:border-primary transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Готовы обсудить ваш проект? Напишите нам!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea
                      placeholder="Расскажите о вашем проекте..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <Card className="hover:border-primary transition-colors">
                <CardContent className="pt-6 flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Email</div>
                    <div className="text-muted-foreground">hello@webstudio.dev</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:border-primary transition-colors">
                <CardContent className="pt-6 flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Телефон</div>
                    <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:border-primary transition-colors">
                <CardContent className="pt-6 flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Офис</div>
                    <div className="text-muted-foreground">Москва, ул. Тверская, 1</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold text-primary flex items-center gap-2 mb-4">
                <Icon name="Code2" size={24} />
                <span>WebStudio</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Создаём цифровые решения будущего
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">Веб-сайты</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Интернет-магазины</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">CRM-системы</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Чат-боты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a></li>
                <li><a href="#testimonials" className="hover:text-primary transition-colors">Отзывы</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <a href="#" className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                  <Icon name="Github" size={20} className="text-primary" />
                </a>
                <a href="#" className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                  <Icon name="Linkedin" size={20} className="text-primary" />
                </a>
                <a href="#" className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                  <Icon name="Twitter" size={20} className="text-primary" />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 WebStudio. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
