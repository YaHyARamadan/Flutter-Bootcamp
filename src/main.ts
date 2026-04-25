// @ts-nocheck
/* ==========================================================
   Flutter Course — Single Entry (data + renderer)
   Bundled into index.html by vite-plugin-singlefile.
   ========================================================== */

import { sectionContent } from './content';

/* ============================================================
   PART 1 — DATA (sections + levels)
   ============================================================ */

const sections: any = {
  0: { title: 'فهرس', ar: 'فهرس المحتوى', num: '00', color: '#54536A', bg: 'rgba(84,83,106,0.15)', numClass: 'nt', tags: ['17 section', 'ملخص'] },
  1: { title: 'Overview', ar: 'المفاهيم الأساسية', num: '01', color: '#2DC998', bg: 'rgba(45,201,152,0.12)', numClass: 'nt', tags: ['Flutter', 'Dart', 'Cross-platform'] },
  2: { title: 'Dart basics', ar: 'أساسيات اللغة', num: '02', color: '#2DC998', bg: 'rgba(45,201,152,0.12)', numClass: 'nt', tags: ['Variables', 'Loops', 'Functions', 'switch'] },
  3: { title: 'OOP', ar: 'البرمجة الكائنية', num: '03', color: '#2DC998', bg: 'rgba(45,201,152,0.12)', numClass: 'nt', badge: { text: 'core', cls: 'bc' }, tags: ['Class', 'Object', 'Inheritance', 'Polymorphism'] },
  4: { title: 'Null safety', ar: 'أمان القيم الفارغة', num: '04', color: '#2DC998', bg: 'rgba(45,201,152,0.12)', numClass: 'nt', badge: { text: 'core', cls: 'bc' }, tags: ['?', '!', '??', 'late'] },
  5: { title: 'What is a Widget?', ar: 'أهم نقطة في Flutter', num: '05', color: '#7C6FE0', bg: 'rgba(124,111,224,0.15)', numClass: 'np', badge: { text: 'core', cls: 'bc' }, tags: ['UI', 'Layout', 'Interactive'] },
  6: { title: 'App structure', ar: 'بنية التطبيق', num: '06', color: '#7C6FE0', bg: 'rgba(124,111,224,0.15)', numClass: 'np', tags: ['main.dart', 'runApp()', 'MaterialApp'] },
  7: { title: 'Flutter UI basics', ar: 'واجهات المستخدم', num: '07', color: '#7C6FE0', bg: 'rgba(124,111,224,0.15)', numClass: 'np', tags: ['Scaffold', 'Container', 'Column', 'Row'] },
  8: { title: 'Project 1 — Counter App', ar: 'State concept عملياً', num: '08', color: '#F07057', bg: 'rgba(240,112,87,0.12)', numClass: 'nc', badge: { text: 'project', cls: 'bco' }, tags: ['StatefulWidget', 'setState()'] },
  9: { title: 'More widgets', ar: 'ويدجتات متقدمة', num: '09', color: '#7C6FE0', bg: 'rgba(124,111,224,0.15)', numClass: 'np', tags: ['Navigator', 'ListView', 'Stack', 'PageView'] },
  10: { title: 'Storage', ar: 'تخزين البيانات', num: '10', color: '#F0A830', bg: 'rgba(240,168,48,0.12)', numClass: 'na', tags: ['SharedPreferences', 'Hive'] },
  11: { title: 'Packages', ar: 'المكتبات الخارجية', num: '11', color: '#F0A830', bg: 'rgba(240,168,48,0.12)', numClass: 'na', tags: ['pub.dev', 'pubspec.yaml'] },
  12: { title: 'State management', ar: 'إدارة الحالة', num: '12', color: '#F0A830', bg: 'rgba(240,168,48,0.12)', numClass: 'na', badge: { text: 'core', cls: 'bc' }, tags: ['Provider', 'ChangeNotifier'] },
  13: { title: 'Project 2', ar: 'مشروع شامل', num: '13', color: '#F07057', bg: 'rgba(240,112,87,0.12)', numClass: 'nc', badge: { text: 'project', cls: 'bco' }, tags: ['كل اللي اتعلمناه'] },
  14: { title: 'Async / Await', ar: 'البرمجة غير المتزامنة', num: '14', color: '#E060A0', bg: 'rgba(224,96,160,0.12)', numClass: 'npi', badge: { text: 'core', cls: 'bc' }, tags: ['Future', 'async', 'await'] },
  15: { title: 'REST APIs', ar: 'التواصل مع الإنترنت', num: '15', color: '#E060A0', bg: 'rgba(224,96,160,0.12)', numClass: 'npi', tags: ['HTTP', 'JSON', 'Dio'] },
  16: { title: 'Firebase', ar: 'الـ Backend جاهز', num: '16', color: '#4A9EF0', bg: 'rgba(74,158,240,0.12)', numClass: 'nb', tags: ['Auth', 'Firestore', 'Storage'] },
  17: { title: 'Final projects', ar: 'مشاريع التخرج', num: '17', color: '#50C878', bg: 'rgba(80,200,120,0.12)', numClass: 'ng', badge: { text: 'final', cls: 'bg2' }, tags: ['Graduation App', 'Full Stack'] }
};

const sectionGroups = [
  { label: 'الفهرس', ids: [0] },
  { label: 'الأساسيات', ids: [1, 2, 3, 4] },
  { label: 'Flutter', ids: [5, 6, 7, 8, 9] },
  { label: 'المتقدم', ids: [10, 11, 12, 13, 14, 15, 16, 17] }
];

const C = {
  teal:   { c: '#2DC998', b: 'rgba(45,201,152,0.12)' },
  purple: { c: '#7C6FE0', b: 'rgba(124,111,224,0.15)' },
  coral:  { c: '#F07057', b: 'rgba(240,112,87,0.12)' },
  amber:  { c: '#F0A830', b: 'rgba(240,168,48,0.12)' },
  pink:   { c: '#E060A0', b: 'rgba(224,96,160,0.12)' },
  blue:   { c: '#4A9EF0', b: 'rgba(74,158,240,0.12)' },
  green:  { c: '#50C878', b: 'rgba(80,200,120,0.12)' }
};

const level1Chapters = [
  { num: '01', name: 'Overview', nameAr: 'المفاهيم الأساسية', color: C.teal.c, bg: C.teal.b, points: ['ما هي البرمجة؟','ما هو تطبيق الموبايل؟','ما هو Flutter؟','ما هو Dart؟','ليه نختار Flutter؟','Native Development','Cross-platform Development'] },
  { num: '02', name: 'Installation', nameAr: 'تثبيت Flutter وإعداد البيئة', color: C.teal.c, bg: C.teal.b, points: ['تحميل Flutter SDK','تثبيت Android Studio','تثبيت VS Code','flutter doctor','إنشاء أول مشروع','تشغيل التطبيق على الـ Emulator'] },
  { num: '03', name: 'Dart Basics', nameAr: 'أساسيات اللغة', color: C.teal.c, bg: C.teal.b, points: ['Variables','Data Types (int, double, String, bool)','if / else if / else','for loop','while loop','Functions in general','List & Map'] },
  { num: '04', name: 'Null Safety', nameAr: 'أمان القيم الفارغة', color: C.teal.c, bg: C.teal.b, points: ['Nullable Types (?)','Null Assertion Operator (!)'] },
  { num: '05', name: 'OOP', nameAr: 'البرمجة الكائنية', color: C.teal.c, bg: C.teal.b, points: ['Class & Object','Constructor'] },
  { num: '06', name: 'Widgets Introduction', nameAr: 'مقدمة الـ Widgets', color: C.purple.c, bg: C.purple.b, points: ['تعريف الـ Widget','UI Widgets (Text, Image, Icon, Card)','Layout Widgets (Column, Row, Container, Stack)','Interactive Widgets (Button, TextField, GestureDetector, Switch)','Widget Tree'] },
  { num: '07', name: 'App Structure', nameAr: 'بنية التطبيق', color: C.purple.c, bg: C.purple.b, points: ['main.dart file','void main() function','runApp() function','MaterialApp widget','Scaffold widget','StatelessWidget','build() method'] },
  { num: '08', name: 'Flutter UI Basics', nameAr: 'واجهات المستخدم', color: C.purple.c, bg: C.purple.b, points: ['Scaffold (appBar, body)','AppBar (title, actions, leading, centerTitle)','ElevatedButton','Text widget','TextStyle (fontSize, fontWeight, color)','Container','EdgeInsets (padding, margin)','Column (mainAxisAlignment, crossAxisAlignment)','Row','Center','SafeArea','Icons','Colors'] },
  { num: '09', name: 'Project 1 — Counter App', nameAr: 'أول مشروع — State concept', color: C.coral.c, bg: C.coral.b, points: ['StatelessWidget vs StatefulWidget','StatefulWidget structure','State<T> class','createState() method','setState() method','بناء Counter App كامل'] },
  { num: '10', name: 'More Widgets', nameAr: 'ويدجتات أساسية', color: C.purple.c, bg: C.purple.b, points: ['Image.asset','Image.network','SizedBox','Navigator.push','Navigator.pop','MaterialPageRoute','Navigator.pushReplacement','SingleChildScrollView'] },
  { num: '11', name: 'Final Projects', nameAr: 'مشاريع التخرج', color: C.green.c, bg: C.green.b, points: ['Mini Project — Profile Card App','Mini Project — Todo List App','Student Graduation Project — Recipe App','Student Graduation Project — Quotes App','Student Graduation Project — Weather UI'] }
];

const level2Chapters = [
  { num: '01', name: 'Overview', nameAr: 'المفاهيم الأساسية', color: C.teal.c, bg: C.teal.b, points: ['ما هي البرمجة؟','ما هو تطبيق الموبايل؟','ما هو Flutter؟','ما هو Dart؟','ليه نختار Flutter؟','Native Development','Cross-platform Development'] },
  { num: '02', name: 'Installation', nameAr: 'تثبيت Flutter وإعداد البيئة', color: C.teal.c, bg: C.teal.b, points: ['تحميل Flutter SDK','إعداد PATH','تثبيت Android Studio','تثبيت Android SDK & Emulator','تثبيت VS Code وإضافة Flutter Extension','flutter doctor','إنشاء أول مشروع','تشغيل التطبيق على الـ Emulator'] },
  { num: '03', name: 'Dart Basics', nameAr: 'أساسيات اللغة', color: C.teal.c, bg: C.teal.b, points: ['Variables','Data Types (int, double, String, bool)','dynamic keyword','var keyword','final keyword','const keyword','if / else if / else','while loop','for loop','do-while loop','Map','Functions','Positional Parameters','Arrow Functions','String Interpolation'] },
  { num: '04', name: 'Null Safety', nameAr: 'أمان القيم الفارغة', color: C.teal.c, bg: C.teal.b, points: ['Nullable Types (?)','Null-aware Operator (??)','Null Assertion Operator (!)'] },
  { num: '05', name: 'OOP', nameAr: 'البرمجة الكائنية', color: C.teal.c, bg: C.teal.b, points: ['Class & Object','Properties','Constructor','Methods','Inheritance (extends)'] },
  { num: '06', name: 'Widgets Introduction', nameAr: 'مقدمة الـ Widgets', color: C.purple.c, bg: C.purple.b, points: ['تعريف الـ Widget','UI Widgets (Text, Image, Icon, Card)','Layout Widgets (Column, Row, Container, Stack)','Interactive Widgets (Button, TextField, GestureDetector, Switch)','Widget Tree'] },
  { num: '07', name: 'App Structure', nameAr: 'بنية التطبيق', color: C.purple.c, bg: C.purple.b, points: ['main.dart file','void main() function','runApp() function','MaterialApp widget','Scaffold widget','StatelessWidget','build() method'] },
  { num: '08', name: 'Flutter UI Basics', nameAr: 'واجهات المستخدم + Packages', color: C.purple.c, bg: C.purple.b, points: ['Scaffold (appBar, body, FAB)','FloatingActionButton','IconButton','ElevatedButton','TextButton','TextStyle (fontSize, fontWeight, color, letterSpacing)','Text widget','Container','BoxDecoration','EdgeInsets (padding, margin)','Border','BorderRadius','Column (mainAxisAlignment, crossAxisAlignment)','Duplicate color error حلها','Row','Center','Icons','Colors','— Packages —','ما هي الـ Packages','pub.dev موقع','pubspec.yaml file','dependencies section','flutter pub get','flutter pub add','import package'] },
  { num: '09', name: 'Project 1 — Counter App', nameAr: 'أول مشروع — State concept', color: C.coral.c, bg: C.coral.b, points: ['StatelessWidget vs StatefulWidget','StatefulWidget structure','State<T> class','createState() method','setState() method','بناء Counter App كامل'] },
  { num: '10', name: 'More Widgets', nameAr: 'ويدجتات أساسية', color: C.purple.c, bg: C.purple.b, points: ['Image.asset','Image.network','BoxFit','TextField','Expanded widget','SizedBox','SingleChildScrollView','ListTile','MaterialPageRoute','Navigator.push','Navigator.pop','Navigator.pushReplacement'] },
  { num: '11', name: 'Storage', nameAr: 'تخزين البيانات', color: C.amber.c, bg: C.amber.b, points: ['لماذا نحتاج Storage','SharedPreferences','getInstance()','setString / setInt / setBool','getString / getInt / getBool'] },
  { num: '12', name: 'Project 2', nameAr: 'مشروع شامل', color: C.coral.c, bg: C.coral.b, points: ['تطبيق شامل يدمج كل ما سبق','تصميم UI متكامل باستخدام Layout Widgets','إدارة الحالة بـ setState','استخدام SharedPreferences لحفظ الإعدادات','استخدام Packages خارجية','التنقل بين الصفحات (Navigator)'] },
  { num: '13', name: 'Final Projects', nameAr: 'مشروع تخرج', color: C.green.c, bg: C.green.b, points: ['مشروع تخرج بس'] }
];

const level3Chapters = [
  { num: '01', name: 'Overview', nameAr: 'المفاهيم الأساسية', color: C.teal.c, bg: C.teal.b, points: ['ما هي البرمجة؟','ما هو تطبيق الموبايل؟','ما هو Flutter؟','ما هو Dart؟','ليه نختار Flutter؟','Native Development','Cross-platform Development','Hot Reload','Flutter وأداء Native'] },
  { num: '02', name: 'Installation', nameAr: 'تثبيت Flutter وإعداد البيئة', color: C.teal.c, bg: C.teal.b, points: ['تحميل Flutter SDK','إعداد متغيرات النظام (PATH)','تثبيت Android Studio','تثبيت Android SDK & Emulator','تثبيت VS Code وإضافة Flutter Extension','flutter doctor','إنشاء أول مشروع','تشغيل التطبيق على الـ Emulator','تشغيل التطبيق على جهاز حقيقي'] },
  { num: '03', name: 'Dart Basics', nameAr: 'أساسيات اللغة', color: C.teal.c, bg: C.teal.b, points: ['Variables','Data Types (int, double, String, bool)','var keyword','dynamic keyword','final keyword','const keyword','if / else if / else','switch / case / break','for loop','while loop','do-while loop','List','Map','Functions','Positional Parameters','Named Parameters','Required Parameters','Default Values','Arrow Functions','String Interpolation'] },
  { num: '04', name: 'Null Safety', nameAr: 'أمان القيم الفارغة', color: C.teal.c, bg: C.teal.b, points: ['Non-nullable Types','Nullable Types (?)','Null-aware Operator (??)','Safe Access Operator (?.)','Null Assertion Operator (!)','late keyword','required keyword'] },
  { num: '05', name: 'OOP', nameAr: 'البرمجة الكائنية', color: C.teal.c, bg: C.teal.b, points: ['Class & Object','Properties','Constructor','Methods','this keyword','Encapsulation','Private members (_)','Getters','Setters','Inheritance (extends)','super keyword','@override annotation','Polymorphism','Abstract Classes'] },
  { num: '06', name: 'Widgets Introduction', nameAr: 'مقدمة الـ Widgets', color: C.purple.c, bg: C.purple.b, points: ['تعريف الـ Widget','UI Widgets (Text, Image, Icon, Card)','Layout Widgets (Column, Row, Container, Stack)','Interactive Widgets (Button, TextField, GestureDetector, Switch)','Widget Tree'] },
  { num: '07', name: 'App Structure', nameAr: 'بنية التطبيق', color: C.purple.c, bg: C.purple.b, points: ['main.dart file','void main() function','runApp() function','MaterialApp widget','Scaffold widget','StatelessWidget','BuildContext','build() method','debugShowCheckedModeBanner'] },
  { num: '08', name: 'Flutter UI Basics', nameAr: 'واجهات المستخدم + Packages', color: C.purple.c, bg: C.purple.b, points: ['Scaffold (appBar, body, drawer, bottomNavigationBar, FAB)','AppBar (title, actions, leading, centerTitle)','IconButton','FloatingActionButton','Drawer','BottomNavigationBar','Text widget','TextStyle (fontSize, fontWeight, color, letterSpacing)','Container','BoxDecoration','EdgeInsets (padding, margin)','BoxShadow','BorderRadius','Border','Duplicate color error حلها','Column (mainAxisAlignment, crossAxisAlignment)','Row','Center','SafeArea','Icons','Colors','— Packages —','ما هي الـ Packages','pub.dev موقع','pubspec.yaml file','dependencies section','flutter pub get','flutter pub add','import package','http package','dio package','provider package','cached_network_image','intl package','flutter_svg','flutter_local_notifications'] },
  { num: '09', name: 'Project 1 — Counter App', nameAr: 'أول مشروع — State concept', color: C.coral.c, bg: C.coral.b, points: ['StatelessWidget vs StatefulWidget','StatefulWidget structure','State<T> class','createState() method','setState() method','متى تستخدم setState','بناء Counter App كامل'] },
  { num: '10', name: 'More Widgets', nameAr: 'ويدجتات متقدمة', color: C.purple.c, bg: C.purple.b, points: ['Image.asset','Image.network','BoxFit','TextFormField','InputDecoration','Form widget','GlobalKey<FormState>','Validators','TextEditingController','Expanded widget','SizedBox','Stack widget','Positioned widget','Navigator.push','Navigator.pop','MaterialPageRoute','Navigator.pushReplacement','ListView','ListTile','PageView','PageController','SingleChildScrollView'] },
  { num: '11', name: 'Storage', nameAr: 'تخزين البيانات', color: C.amber.c, bg: C.amber.b, points: ['لماذا نحتاج Storage','SharedPreferences','getInstance()','setString / setInt / setBool / setDouble','getString / getInt / getBool','remove() / clear()','Hive database','Hive.initFlutter()','openBox()','box.put / box.get / box.delete','متى تستخدم SharedPreferences ومتى Hive'] },
  { num: '12', name: 'State Management', nameAr: 'إدارة الحالة', color: C.amber.c, bg: C.amber.b, points: ['مشكلة setState','مفهوم Global State','Provider package','ChangeNotifier class','notifyListeners()','ChangeNotifierProvider','MultiProvider','context.watch','context.read','Consumer widget','Selector widget'] },
  { num: '13', name: 'Project 2', nameAr: 'مشروع شامل (Todo App)', color: C.coral.c, bg: C.coral.b, points: ['تخطيط هيكل المشروع','lib/ folder structure','models/ folder','providers/ folder','screens/ folder','widgets/ folder','Task Model class','Task Provider','Home Screen','Add Task Screen','Settings Screen','Task Tile custom widget','دمج كل المفاهيم السابقة'] },
  { num: '14', name: 'Firebase', nameAr: 'الـ Backend جاهز', color: C.blue.c, bg: C.blue.b, points: ['ما هو Firebase','Firebase Console','Firebase CLI installation','FlutterFire CLI','flutterfire configure','firebase_core package','Firebase.initializeApp()','Firebase Authentication','Email & Password Auth','createUserWithEmailAndPassword','signInWithEmailAndPassword','signOut()','currentUser'] },
  { num: '15', name: 'Responsive Design', nameAr: 'تصميم متجاوب', color: C.pink.c, bg: C.pink.b, points: ['MediaQuery','LayoutBuilder','Flexible & Expanded','OrientationBuilder','ResponsiveBuilder patterns','Platform-aware widgets','Adaptive layouts'] },
  { num: '16', name: 'Final Projects', nameAr: 'مشاريع التخرج', color: C.green.c, bg: C.green.b, points: ['E-Commerce App','Chat App with Firebase','News App with REST API','Graduation Project','تخطيط المشروع','تصميم الـ UI/UX','اختيار الـ Architecture','النشر على Play Store','النشر على App Store','استمرار التعلم'] }
];

const level4Chapters = [
  { num: '01', name: 'Overview', nameAr: 'المفاهيم الأساسية', color: C.teal.c, bg: C.teal.b, points: ['ما هي البرمجة؟','ما هو تطبيق الموبايل؟','ما هو Flutter؟','ما هو Dart؟','ليه نختار Flutter؟','Native Development','Cross-platform Development','Hot Reload','Flutter وأداء Native'] },
  { num: '02', name: 'Installation', nameAr: 'تثبيت Flutter وإعداد البيئة', color: C.teal.c, bg: C.teal.b, points: ['تحميل Flutter SDK','إعداد متغيرات النظام (PATH)','تثبيت Android Studio','تثبيت Android SDK & Emulator','تثبيت Xcode (للـ iOS)','تثبيت VS Code وإضافة Flutter Extension','flutter doctor','إنشاء أول مشروع','تشغيل التطبيق على الـ Emulator','تشغيل التطبيق على جهاز حقيقي','Hot Reload vs Hot Restart'] },
  { num: '03', name: 'Dart Basics', nameAr: 'أساسيات اللغة', color: C.teal.c, bg: C.teal.b, points: ['Variables','Data Types (int, double, String, bool)','var keyword','dynamic keyword','final keyword','const keyword','if / else if / else','switch / case / break','for loop','while loop','do-while loop','List','Map','Functions','Positional Parameters','Named Parameters','Required Parameters','Default Values','Arrow Functions','String Interpolation'] },
  { num: '04', name: 'Null Safety', nameAr: 'أمان القيم الفارغة', color: C.teal.c, bg: C.teal.b, points: ['Non-nullable Types','Nullable Types (?)','Null-aware Operator (??)','Safe Access Operator (?.)','Null Assertion Operator (!)','late keyword','required keyword'] },
  { num: '05', name: 'OOP', nameAr: 'البرمجة الكائنية', color: C.teal.c, bg: C.teal.b, points: ['Class & Object','Properties','Constructor','Methods','this keyword','Encapsulation','Private members (_)','Getters','Setters','Inheritance (extends)','super keyword','@override annotation','Polymorphism','Abstract Classes'] },
  { num: '06', name: 'Widgets Introduction', nameAr: 'مقدمة الـ Widgets', color: C.purple.c, bg: C.purple.b, points: ['تعريف الـ Widget','UI Widgets (Text, Image, Icon, Card)','Layout Widgets (Column, Row, Container, Stack)','Interactive Widgets (Button, TextField, GestureDetector, Switch)','Widget Tree'] },
  { num: '07', name: 'App Structure', nameAr: 'بنية التطبيق', color: C.purple.c, bg: C.purple.b, points: ['main.dart file','void main() function','runApp() function','MaterialApp widget','Scaffold widget','StatelessWidget','BuildContext','build() method','debugShowCheckedModeBanner'] },
  { num: '08', name: 'Flutter UI Basics', nameAr: 'واجهات المستخدم + Packages', color: C.purple.c, bg: C.purple.b, points: ['Scaffold (appBar, body, drawer, bottomNavigationBar, FAB)','AppBar (title, actions, leading, centerTitle)','IconButton','FloatingActionButton','Drawer','BottomNavigationBar','Text widget','TextStyle (fontSize, fontWeight, color, letterSpacing)','Container','BoxDecoration','EdgeInsets (padding, margin)','BoxShadow','BorderRadius','Border','Duplicate color error حلها','Column (mainAxisAlignment, crossAxisAlignment)','Row','Center','SafeArea','Icons','Colors','— Packages —','ما هي الـ Packages','pub.dev موقع','pubspec.yaml file','dependencies section','flutter pub get','flutter pub add','import package','http package','dio package','provider package','cached_network_image','intl package','flutter_svg','flutter_local_notifications'] },
  { num: '09', name: 'Project 1 — Counter App', nameAr: 'أول مشروع — State concept', color: C.coral.c, bg: C.coral.b, points: ['StatelessWidget vs StatefulWidget','StatefulWidget structure','State<T> class','createState() method','setState() method','متى تستخدم setState','بناء Counter App كامل'] },
  { num: '10', name: 'More Widgets', nameAr: 'ويدجتات متقدمة', color: C.purple.c, bg: C.purple.b, points: ['Image.asset','Image.network','BoxFit','TextFormField','InputDecoration','Form widget','GlobalKey<FormState>','Validators','TextEditingController','Expanded widget','SizedBox','Stack widget','Positioned widget','Navigator.push','Navigator.pop','MaterialPageRoute','Navigator.pushReplacement','ListView','ListTile','PageView','PageController','SingleChildScrollView'] },
  { num: '11', name: 'Storage', nameAr: 'تخزين البيانات', color: C.amber.c, bg: C.amber.b, points: ['لماذا نحتاج Storage','SharedPreferences','getInstance()','setString / setInt / setBool / setDouble','getString / getInt / getBool','remove() / clear()','Hive database','Hive.initFlutter()','openBox()','box.put / box.get / box.delete','متى تستخدم SharedPreferences ومتى Hive'] },
  { num: '12', name: 'State Management', nameAr: 'إدارة الحالة', color: C.amber.c, bg: C.amber.b, points: ['مشكلة setState','مفهوم Global State','Provider package','ChangeNotifier class','notifyListeners()','ChangeNotifierProvider','MultiProvider','context.watch','context.read','Consumer widget','Selector widget'] },
  { num: '13', name: 'Project 2', nameAr: 'مشروع شامل (Todo App)', color: C.coral.c, bg: C.coral.b, points: ['تخطيط هيكل المشروع','lib/ folder structure','models/ folder','providers/ folder','screens/ folder','widgets/ folder','Task Model class','Task Provider','Home Screen','Add Task Screen','Settings Screen','Task Tile custom widget','دمج كل المفاهيم السابقة'] },
  { num: '14', name: 'Async / Await / Future', nameAr: 'البرمجة غير المتزامنة', color: C.pink.c, bg: C.pink.b, points: ['async keyword','await keyword','Future.delayed','try / catch'] },
  { num: '15', name: 'REST APIs', nameAr: 'التواصل مع الإنترنت', color: C.pink.c, bg: C.pink.b, points: ['ما هو الـ API','REST architecture','HTTP Methods','GET request','POST request','PUT request','PATCH request','DELETE request','JSON format','jsonDecode / jsonEncode','http package','Uri.parse','http.get / http.post','Response object','statusCode (200, 201, 400, 404, 500)','Headers','Request Body','Model.fromJson factory','Model.toJson method','Dio package'] },
  { num: '16', name: 'Firebase', nameAr: 'الـ Backend جاهز', color: C.blue.c, bg: C.blue.b, points: ['ما هو Firebase','Firebase Console','Firebase CLI installation','FlutterFire CLI','flutterfire configure','firebase_core package','Firebase.initializeApp()','Firebase Authentication','Email & Password Auth','createUserWithEmailAndPassword','signInWithEmailAndPassword','signOut()','currentUser'] },
  { num: '17', name: 'Responsive Design', nameAr: 'تصميم متجاوب', color: C.pink.c, bg: C.pink.b, points: ['MediaQuery','LayoutBuilder','Flexible & Expanded','OrientationBuilder','ResponsiveBuilder patterns','Platform-aware widgets','Adaptive layouts'] },
  { num: '18', name: 'Final Projects', nameAr: 'مشاريع التخرج', color: C.green.c, bg: C.green.b, points: ['E-Commerce App','Chat App with Firebase','News App with REST API','Graduation Project','تخطيط المشروع','تصميم الـ UI/UX','اختيار الـ Architecture','النشر على Play Store','النشر على App Store','استمرار التعلم'] }
];

const levels: any = {
  1: { num: 1, title: 'Level 1', titleAr: 'المبتدئ',  description: 'البداية — أساسيات Dart فقط',                 available: true, chapters: level1Chapters },
  2: { num: 2, title: 'Level 2', titleAr: 'المتوسط',  description: 'Flutter Widgets ومشاريع بسيطة',              available: true, chapters: level2Chapters },
  3: { num: 3, title: 'Level 3', titleAr: 'المتقدم',  description: 'كل المنهج ماعدا APIs — من Dart إلى Firebase', available: true, chapters: level3Chapters },
  4: { num: 4, title: 'Level 4', titleAr: 'الشامل',   description: 'كل المنهج — من Dart إلى Firebase',           available: true, chapters: level4Chapters }
};

/* Helper: format day count to Arabic label */
function dayLabel(d: number): string {
  if (d === 1) return 'يوم';
  if (d === 2) return 'يومين';
  return d + ' أيام';
}

/* Fixed durations — based on Level 4 (الشامل). Same values used for all levels. */
const chapterDurations: Record<string, number> = {
  'Overview':                1,
  'Installation':            1,
  'Dart Basics':             2,
  'Null Safety':             1,
  'OOP':                     2,
  'Widgets Introduction':    1,
  'App Structure':           1,
  'Flutter UI Basics':       3,
  'Project 1 — Counter App': 1,
  'More Widgets':            3,
  'Storage':                 2,
  'State Management':        2,
  'Project 2':               3,
  'Async / Await / Future':  1,
  'REST APIs':               2,
  'Firebase':                2,
  'Responsive Design':       2,
  'Final Projects':          2
};

function getDuration(_levelNum: number, chapterName: string): { label: string; days: number } | null {
  const days = chapterDurations[chapterName];
  if (days == null) return null;
  return { label: dayLabel(days), days };
}

function computeTotalDays(_levelNum: number, chapters: any[]): number {
  let total = 0;
  chapters.forEach(ch => {
    const d = chapterDurations[ch.name];
    if (d) total += d;
  });
  return total;
}

/* ============================================================
   PART 2 — RENDERER (vanilla JS, replaces React)
   ============================================================ */

let view: any = { type: 'welcome' };
const openChapters: any = {};

function el(tag: string, attrs?: any, children?: any): HTMLElement {
  const node = document.createElement(tag);
  if (attrs) {
    for (const k in attrs) {
      if (k === 'class') node.className = attrs[k];
      else if (k === 'html') node.innerHTML = attrs[k];
      else if (k.startsWith('on') && typeof attrs[k] === 'function') {
        node.addEventListener(k.slice(2).toLowerCase(), attrs[k]);
      } else if (k === 'style' && typeof attrs[k] === 'object') {
        Object.assign(node.style, attrs[k]);
      } else {
        node.setAttribute(k, attrs[k]);
      }
    }
  }
  if (children != null) {
    (Array.isArray(children) ? children : [children]).forEach((c: any) => {
      if (c == null || c === false) return;
      node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
  }
  return node;
}

function renderSidebar() {
  const toc = document.getElementById('toc')!;
  toc.innerHTML = '';

  const levelsGroup = el('div', { class: 'toc-group' });
  levelsGroup.appendChild(el('div', { class: 'toc-label' }, 'المستويات'));
  const colorClasses = ['nt', 'np', 'na', 'ng'];
  [1, 2, 3, 4].forEach(n => {
    const lvl = levels[n];
    const active = view.type === 'level' && view.num === n;
    const card = el('div', {
      class: 'scard' + (active ? ' active' : ''),
      onClick: () => setView({ type: 'level', num: n })
    });
    card.appendChild(el('div', { class: 'snum ' + colorClasses[n - 1] }, 'L' + n));
    const body = el('div', { class: 'sbody' });
    const top = el('div', { class: 'stop' });
    const left = el('div');
    left.appendChild(el('div', { class: 'stitle' }, lvl.title));
    left.appendChild(el('div', { class: 'sar' }, lvl.titleAr));
    top.appendChild(left);
    top.appendChild(el('span', { class: 'sbadge ' + (lvl.available ? 'bg2' : 'ba') },
      lvl.available ? 'جاهز' : 'قريباً'));
    body.appendChild(top);
    const tags = el('div', { class: 'stags' });
    tags.appendChild(el('span', { class: 'stag' }, lvl.chapters.length + ' chapters'));
    body.appendChild(tags);
    card.appendChild(body);
    levelsGroup.appendChild(card);
  });
  toc.appendChild(levelsGroup);

  sectionGroups.forEach(group => {
    const g = el('div', { class: 'toc-group' });
    g.appendChild(el('div', { class: 'toc-label' }, group.label));
    group.ids.forEach(id => {
      const sec = sections[id];
      const active = view.type === 'section' && view.id === id;
      const card = el('div', {
        class: 'scard' + (active ? ' active' : ''),
        onClick: () => setView({ type: 'section', id: id })
      });
      card.appendChild(el('div', { class: 'snum ' + sec.numClass }, sec.num));
      const body = el('div', { class: 'sbody' });
      const top = el('div', { class: 'stop' });
      const left = el('div');
      left.appendChild(el('div', { class: 'stitle' }, sec.title));
      left.appendChild(el('div', { class: 'sar' }, sec.ar));
      top.appendChild(left);
      if (sec.badge) {
        top.appendChild(el('span', { class: 'sbadge ' + sec.badge.cls }, sec.badge.text));
      }
      body.appendChild(top);
      const tags = el('div', { class: 'stags' });
      sec.tags.forEach((t: string) => tags.appendChild(el('span', { class: 'stag' }, t)));
      body.appendChild(tags);
      card.appendChild(body);
      g.appendChild(card);
    });
    toc.appendChild(g);
  });
}

function renderMain() {
  const main = document.getElementById('main')!;
  main.innerHTML = '';

  if (view.type === 'welcome') {
    const w = el('div', { class: 'welcome' });
    w.appendChild(el('div', { class: 'wicon' }, '📱'));
    w.appendChild(el('h2', null, 'اختار section أو Level من القائمة'));
    w.appendChild(el('p', null,
      '17 section من Dart الأساسيات لـ Firebase — أو افتح أحد المستويات الأربعة لعرض النقاط بشكل مختصر'));
    main.appendChild(w);
    return;
  }

  if (view.type === 'section') {
    const sec = sections[view.id];
    const pane = el('div', { class: 'cpane on' });
    const head = el('div', { class: 'cheader' });
    head.appendChild(el('div', {
      class: 'cnum',
      style: { background: sec.bg, color: sec.color }
    }, sec.num));
    const titles = el('div', { class: 'ctitles' });
    titles.appendChild(el('div', { class: 'ctitle' }, sec.title));
    titles.appendChild(el('div', { class: 'csub' }, sec.ar));
    head.appendChild(titles);
    head.appendChild(el('div', { class: 'cprog' }, sec.num + ' / 17'));
    pane.appendChild(head);

    const scroll = el('div', { class: 'cscroll', html: sectionContent[view.id] || '<div class="intro">المحتوى غير متاح</div>' });
    pane.appendChild(scroll);
    main.appendChild(pane);
    scroll.scrollTop = 0;
    return;
  }

  if (view.type === 'level') {
    const lvl = levels[view.num];
    const pane = el('div', { class: 'cpane on' });

    const head = el('div', { class: 'cheader' });
    head.appendChild(el('div', {
      class: 'cnum',
      style: { background: 'rgba(124,111,224,0.2)', color: '#7C6FE0' }
    }, 'L' + lvl.num));
    const titles = el('div', { class: 'ctitles' });
    titles.appendChild(el('div', { class: 'ctitle' }, lvl.title + ' — ' + lvl.titleAr));
    titles.appendChild(el('div', { class: 'csub' }, lvl.chapters.length + ' chapters'));
    head.appendChild(titles);
    head.appendChild(el('div', { class: 'cprog' }, 'LEVEL ' + lvl.num + ' / 4'));
    pane.appendChild(head);

    const scroll = el('div', { class: 'cscroll' });
    if (lvl.available) {
      scroll.appendChild(renderLevelContent(lvl));
    } else {
      scroll.appendChild(renderComingSoon(lvl));
    }
    pane.appendChild(scroll);
    main.appendChild(pane);
    scroll.scrollTop = 0;
  }
}

function renderLevelContent(lvl: any): DocumentFragment {
  const wrap = document.createDocumentFragment();
  const totalPoints = lvl.chapters.reduce((s: number, c: any) => s + c.points.length, 0);

  const hero = el('div', { class: 'lvl-hero' });
  const heroRow = el('div', { class: 'lvl-hero-row' });
  heroRow.appendChild(el('div', { class: 'lvl-hero-num' }, 'L' + lvl.num));
  const heroInfo = el('div', { class: 'lvl-hero-info' });
  const subtitle = lvl.num === 1 ? 'المبتدئ' :
                   lvl.num === 2 ? 'المتوسط' :
                   lvl.num === 3 ? 'المتقدم' : 'الشامل';
  const subEng = lvl.num === 4 ? 'Complete Roadmap' :
                 lvl.num === 1 ? 'Basic Foundation' :
                 lvl.num === 2 ? 'Intermediate Level' : 'Advanced Level';
  heroInfo.appendChild(el('div', { class: 'lvl-hero-title' },
    'المستوى ' + lvl.num + ' — ' + subtitle));
  heroInfo.appendChild(el('div', { class: 'lvl-hero-sub' }, subEng));
  heroRow.appendChild(heroInfo);
  hero.appendChild(heroRow);
  hero.appendChild(el('div', { class: 'lvl-hero-desc' }, lvl.description));

  const stats = el('div', { class: 'lvl-hero-stats' });
  stats.appendChild(el('div', { class: 'lvl-stat', html: '<strong>' + lvl.chapters.length + '</strong> chapters' }));
  stats.appendChild(el('div', { class: 'lvl-stat', html: '<strong>' + totalPoints + '</strong> topics' }));
  const totalDays = computeTotalDays(lvl.num, lvl.chapters);
  stats.appendChild(el('div', { class: 'lvl-stat lvl-stat-days', html: '⏱ <strong>' + totalDays + '</strong> يوم' }));
  stats.appendChild(el('div', { class: 'lvl-stat', html: 'من <strong>Dart</strong> إلى <strong>Firebase</strong>' }));
  hero.appendChild(stats);
  wrap.appendChild(hero);

  const list = el('div', { class: 'chap-list' });
  lvl.chapters.forEach((ch: any) => {
    const key = 'L' + lvl.num + '-' + ch.num;
    const open = !!openChapters[key];
    const chap = el('div', { class: 'chap' + (open ? ' open' : '') });

    const head = el('div', {
      class: 'chap-head',
      onClick: () => {
        openChapters[key] = !openChapters[key];
        chap.classList.toggle('open');
      }
    });
    head.appendChild(el('div', {
      class: 'chap-num',
      style: { background: ch.bg, color: ch.color }
    }, ch.num));

    const info = el('div', { class: 'chap-info' });
    info.appendChild(el('div', { class: 'chap-name' }, ch.name));
    info.appendChild(el('div', { class: 'chap-name-ar' }, ch.nameAr));
    head.appendChild(info);

    const duration = getDuration(lvl.num, ch.name);
    if (duration) {
      head.appendChild(el('span', { class: 'chap-duration' }, '⏱ ' + duration.label));
    }

    head.appendChild(el('span', {
      class: 'chap-badge',
      style: { background: ch.bg, color: ch.color }
    }, 'Level ' + lvl.num));
    head.appendChild(el('div', { class: 'chap-arrow' }, '▼'));
    chap.appendChild(head);

    const body = el('div', { class: 'chap-body' });
    const inner = el('div', { class: 'chap-body-inner' });
    const pad = el('div', { class: 'chap-body-pad' });

    const meta = el('div', { class: 'chap-meta' });
    meta.appendChild(el('span', null, ch.points.length + ' points'));
    meta.appendChild(el('span', { class: 'chap-meta-dot' }));
    meta.appendChild(el('span', null, 'chapter ' + ch.num));
    pad.appendChild(meta);

    const grid = el('div', { class: 'point-grid' });
    ch.points.forEach((pt: string) => {
      const p = el('div', { class: 'point' });
      p.appendChild(el('div', { class: 'point-dot', style: { background: ch.color } }));
      p.appendChild(el('span', null, pt));
      grid.appendChild(p);
    });
    pad.appendChild(grid);

    inner.appendChild(pad);
    body.appendChild(inner);
    chap.appendChild(body);
    list.appendChild(chap);
  });
  wrap.appendChild(list);
  return wrap;
}

function renderComingSoon(lvl: any): DocumentFragment {
  const wrap = document.createDocumentFragment();
  const hero = el('div', { class: 'lvl-hero' });
  const row = el('div', { class: 'lvl-hero-row' });
  row.appendChild(el('div', {
    class: 'lvl-hero-num',
    style: { background: '#54536A', boxShadow: '0 4px 14px rgba(84,83,106,0.4)' }
  }, 'L' + lvl.num));
  const info = el('div', { class: 'lvl-hero-info' });
  info.appendChild(el('div', { class: 'lvl-hero-title' }, 'Level ' + lvl.num));
  info.appendChild(el('div', { class: 'lvl-hero-sub', style: { color: '#F0A830' } }, 'قيد التحضير'));
  row.appendChild(info);
  hero.appendChild(row);
  hero.appendChild(el('div', { class: 'lvl-hero-desc' }, lvl.description));
  wrap.appendChild(hero);

  const empty = el('div', { class: 'lvl-empty' });
  empty.appendChild(el('div', { class: 'lvl-empty-icon' }, '🚧'));
  empty.appendChild(el('div', { class: 'lvl-empty-title' }, 'المحتوى قيد الإعداد'));
  empty.appendChild(el('div', {
    class: 'lvl-empty-desc',
    html: 'ابعتلي قائمة النقاط الخاصة بالـ Level ' + lvl.num + ' وهنضيفها هنا.<br>في الوقت الحالي، تقدر تستخدم <strong>Level 4</strong> اللي شامل كل المنهج.'
  }));
  wrap.appendChild(empty);
  return wrap;
}

function setView(newView: any) {
  if (newView.type === 'level') {
    Object.keys(openChapters).forEach(k => delete openChapters[k]);
  }
  view = newView;
  renderSidebar();
  renderMain();
  // Close sidebar on mobile after selection
  if (window.innerWidth <= 768) {
    (window as any).closeSidebar?.();
  }
}

// Init — DOM is already loaded since this script is at end of body
renderSidebar();
renderMain();
