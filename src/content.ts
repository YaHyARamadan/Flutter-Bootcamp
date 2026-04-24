// @ts-nocheck
/* ==========================================================
   Section content (HTML strings) — keys 0..17
   ========================================================== */

export const sectionContent: Record<number, string> = {

0: `<div class="intro"><strong>فهرس الكورس</strong> — ملخص شامل لكل الـ 17 سيكشن في كورس Flutter. اضغط على أي سيكشن عشان تشوف الشرح الكامل.</div>
<div class="sh2">الأساسيات (4 sections)</div>
<div class="grid2">
<div class="card"><div class="card-icon">📱</div><div class="card-title">01 — Overview</div><div class="card-body">المفاهيم الأساسية: البرمجة، Flutter، Dart، Cross-platform vs Native</div></div>
<div class="card"><div class="card-icon">🎯</div><div class="card-title">02 — Dart basics</div><div class="card-body">أساسيات اللغة: المتغيرات، Types، الشروط، الـ Loops، الدوال، الـ Collections</div></div>
<div class="card"><div class="card-icon">🏗️</div><div class="card-title">03 — OOP</div><div class="card-body">البرمجة الكائنية: Class، Object، Constructor، Inheritance، Polymorphism</div></div>
<div class="card"><div class="card-icon">🛡️</div><div class="card-title">04 — Null safety</div><div class="card-body">أمان القيم الفارغة: ?، !، ??، late operators</div></div>
</div>
<div class="sh2">Flutter (5 sections)</div>
<div class="grid2">
<div class="card"><div class="card-icon">🧱</div><div class="card-title">05 — What is a Widget?</div><div class="card-body">الويدجتات: UI Widgets، Layout Widgets، Interactive Widgets، Widget Tree</div></div>
<div class="card"><div class="card-icon">📦</div><div class="card-title">06 — App structure</div><div class="card-body">بنية التطبيق: main.dart، runApp()، MaterialApp، Scaffold</div></div>
<div class="card"><div class="card-icon">🎨</div><div class="card-title">07 — Flutter UI basics</div><div class="card-body">واجهات المستخدم: Scaffold، Container، Column، Row، Text، TextStyle</div></div>
<div class="card"><div class="card-icon">🧮</div><div class="card-title">08 — Project 1 (Counter)</div><div class="card-body">مشروع عداد: StatefulWidget، setState()، الـ State pattern</div></div>
<div class="card"><div class="card-icon">📑</div><div class="card-title">09 — More widgets</div><div class="card-body">ويدجتات متقدمة: Image، Form، Navigator، ListView، Stack، PageView</div></div>
</div>
<div class="sh2">المتقدم (8 sections)</div>
<div class="grid2">
<div class="card"><div class="card-icon">💾</div><div class="card-title">10 — Storage</div><div class="card-body">تخزين البيانات: SharedPreferences، Hive</div></div>
<div class="card"><div class="card-icon">📚</div><div class="card-title">11 — Packages</div><div class="card-body">المكتبات الخارجية: pub.dev، pubspec.yaml، أشهر الـ packages</div></div>
<div class="card"><div class="card-icon">🔄</div><div class="card-title">12 — State management</div><div class="card-body">إدارة الحالة: Provider، ChangeNotifier</div></div>
<div class="card"><div class="card-icon">📋</div><div class="card-title">13 — Project 2</div><div class="card-body">مشروع شامل: Todo App بدمج كل اللي اتعلمته</div></div>
<div class="card"><div class="card-icon">⏱️</div><div class="card-title">14 — Async / Await</div><div class="card-body">البرمجة غير المتزامنة: Future، async، await، try/catch</div></div>
<div class="card"><div class="card-icon">🌐</div><div class="card-title">15 — REST APIs</div><div class="card-body">التواصل مع الإنترنت: HTTP، GET/POST، JSON parsing</div></div>
<div class="card"><div class="card-icon">🔥</div><div class="card-title">16 — Firebase</div><div class="card-body">الـ Backend جاهز: Authentication، Firestore، Storage</div></div>
<div class="card"><div class="card-icon">🎓</div><div class="card-title">17 — Final projects</div><div class="card-body">مشاريع التخرج: E-Commerce، Chat، News App</div></div>
</div>
<div class="tip">💡 اضغط على أي section من الفهرس الجانبي عشان تشوف الشرح الكامل مع الأمثلة العملية.</div>`,

1: `<div class="intro"><strong>البرمجة</strong> هي إنك تدي الكمبيوتر تعليمات مكتوبة بلغة يفهمها عشان ينفّذ مهمة معينة.</div>
<div class="grid2">
<div class="card"><div class="card-icon">📱</div><div class="card-title">ما هو تطبيق الموبايل؟</div><div class="card-body">برنامج بيشتغل على iOS أو Android. زي WhatsApp وInstagram.</div></div>
<div class="card"><div class="card-icon">💙</div><div class="card-title">ما هو Flutter؟</div><div class="card-body">Framework من Google بيخليك تبني تطبيق واحد يشتغل على iOS وAndroid وWeb وDesktop.</div></div>
<div class="card"><div class="card-icon">🎯</div><div class="card-title">ما هو Dart؟</div><div class="card-body">اللغة البرمجية اللي Flutter مبنية عليها. سريعة وسهلة، شبيهة بـ Java وJavaScript.</div></div>
<div class="card"><div class="card-icon">⚡</div><div class="card-title">ليه Flutter؟</div><div class="card-body">سريع، جميل، Hot Reload، مجتمع ضخم، وكود واحد لكل المنصات.</div></div>
</div>
<div class="sh2">Native vs Cross-platform</div>
<div class="grid2">
<div class="card"><div class="card-title">🍎 Native Development</div><div class="card-body" style="margin-top:6px">كود منفصل لكل منصة. iOS بـ Swift وAndroid بـ Kotlin. أداء ممتاز لكن تكلفة مضاعفة.</div></div>
<div class="card"><div class="card-title">🌐 Cross-platform</div><div class="card-body" style="margin-top:6px">كود واحد يشتغل في كل مكان. Flutter وReact Native الأشهر.</div></div>
</div>
<div class="tip">💡 Flutter بيوصل لأداء Native لأنه بيرسم الـ UI بنفسه — ده اللي بيميزه عن React Native.</div>`,

2: `<div class="intro"><strong>Dart</strong> هي اللغة اللي هتكتب بيها كل كود Flutter. قوية وسهلة.</div>
<div class="sh2">Variables &amp; Data Types</div>
<div class="cb"><div class="cb-label">DART — variables</div><pre><span class="kw">int</span> age = <span class="nm">20</span>;
<span class="kw">double</span> price = <span class="nm">9.99</span>;
<span class="kw">String</span> name = <span class="st">'Ahmed'</span>;
<span class="kw">bool</span> isLoggedIn = <span class="kw">true</span>;
<span class="kw">var</span> x = <span class="nm">42</span>;          <span class="cm">// Dart بيحدد النوع لوحده</span>
<span class="kw">final</span> pi = <span class="nm">3.14</span>;     <span class="cm">// قيمة مش هتتغير</span>
<span class="kw">const</span> MAX = <span class="nm">100</span>;     <span class="cm">// ثابت compile-time</span></pre></div>
<div class="sh2">Conditions</div>
<div class="cb"><div class="cb-label">DART — if / else / switch</div><pre><span class="kw">if</span> (age &gt;= <span class="nm">18</span>) {
  print(<span class="st">'كبير'</span>);
} <span class="kw">else if</span> (age &gt;= <span class="nm">13</span>) {
  print(<span class="st">'مراهق'</span>);
} <span class="kw">else</span> {
  print(<span class="st">'صغير'</span>);
}

<span class="cm">// switch</span>
<span class="kw">switch</span> (day) {
  <span class="kw">case</span> <span class="st">'Monday'</span>:
    print(<span class="st">'بداية الأسبوع'</span>);
    <span class="kw">break</span>;
  <span class="kw">default</span>:
    print(<span class="st">'يوم عادي'</span>);
}</pre></div>
<div class="sh2">Loops</div>
<div class="cb"><div class="cb-label">DART — for / while / do-while</div><pre><span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i &lt; <span class="nm">5</span>; i++) {
  print(i);
}

<span class="kw">int</span> count = <span class="nm">0</span>;
<span class="kw">while</span> (count &lt; <span class="nm">5</span>) {
  print(count);
  count++;
}

<span class="kw">int</span> n = <span class="nm">0</span>;
<span class="kw">do</span> {
  print(n);
  n++;
} <span class="kw">while</span> (n &lt; <span class="nm">3</span>);</pre></div>
<div class="sh2">Collections</div>
<div class="cb"><div class="cb-label">DART — List &amp; Map</div><pre><span class="kw">List</span>&lt;<span class="kw">String</span>&gt; names = [<span class="st">'Ali'</span>, <span class="st">'Sara'</span>, <span class="st">'Mona'</span>];
print(names[<span class="nm">0</span>]);
names.add(<span class="st">'Omar'</span>);

<span class="kw">Map</span>&lt;<span class="kw">String</span>, <span class="kw">int</span>&gt; scores = {
  <span class="st">'Ali'</span>: <span class="nm">95</span>,
  <span class="st">'Sara'</span>: <span class="nm">88</span>,
};
print(scores[<span class="st">'Ali'</span>]);</pre></div>
<div class="sh2">Functions</div>
<div class="cb"><div class="cb-label">DART — functions</div><pre><span class="kw">int</span> <span class="fn">add</span>(<span class="kw">int</span> a, <span class="kw">int</span> b) {
  <span class="kw">return</span> a + b;
}

<span class="kw">void</span> <span class="fn">createUser</span>({<span class="kw">required String</span> name, <span class="kw">int</span> age = <span class="nm">18</span>}) {
  print(<span class="st">'\${name} — \${age}'</span>);
}

<span class="kw">int</span> <span class="fn">square</span>(<span class="kw">int</span> x) =&gt; x * x;</pre></div>`,

3: `<div class="intro"><strong>OOP</strong> هي طريقة تنظيم الكود عن طريق تجميع البيانات والدوال في وحدات اسمها Objects.</div>
<div class="sh2">Class &amp; Object</div>
<div class="cb"><div class="cb-label">DART — class &amp; object</div><pre><span class="kw">class</span> <span class="cl">Car</span> {
  <span class="kw">String</span> brand;
  <span class="kw">int</span> year;
  <span class="kw">double</span> speed = <span class="nm">0</span>;

  <span class="cl">Car</span>({<span class="kw">required this</span>.brand, <span class="kw">required this</span>.year});

  <span class="kw">void</span> <span class="fn">accelerate</span>(<span class="kw">double</span> amount) {
    speed += amount;
    print(<span class="st">'السرعة: \${speed}'</span>);
  }
}

<span class="cl">Car</span> myCar = <span class="cl">Car</span>(brand: <span class="st">'Toyota'</span>, year: <span class="nm">2023</span>);
myCar.accelerate(<span class="nm">60</span>);</pre></div>
<div class="sh2">Inheritance</div>
<div class="cb"><div class="cb-label">DART — inheritance (extends)</div><pre><span class="kw">class</span> <span class="cl">Animal</span> {
  <span class="kw">String</span> name;
  <span class="cl">Animal</span>(<span class="kw">this</span>.name);
  <span class="kw">void</span> <span class="fn">speak</span>() =&gt; print(<span class="st">'...'</span>);
}

<span class="kw">class</span> <span class="cl">Dog</span> <span class="kw">extends</span> <span class="cl">Animal</span> {
  <span class="cl">Dog</span>(<span class="kw">String</span> name) : <span class="kw">super</span>(name);
  <span class="nm">@override</span>
  <span class="kw">void</span> <span class="fn">speak</span>() =&gt; print(<span class="st">'\${name} يقول: Woof!'</span>);
}</pre></div>
<div class="tip">💡 في Flutter هتستخدم OOP في كل حاجة — كل Widget هو class بترث من StatelessWidget أو StatefulWidget.</div>`,

4: `<div class="intro"><strong>Null Safety</strong> هي ميزة في Dart بتضمن إنك مش هتوصل لـ null بشكل مفاجئ.</div>
<div class="cb"><div class="cb-label">DART — null safety operators</div><pre><span class="kw">String</span> name = <span class="st">'Ahmed'</span>;
<span class="cm">// name = null; ❌ Error!</span>

<span class="kw">String?</span> nickname;
nickname = <span class="kw">null</span>; <span class="cm">// ✅</span>

<span class="cm">// ?? — لو null استخدم القيمة دي بدل</span>
<span class="kw">String</span> display = nickname ?? <span class="st">'No nickname'</span>;

<span class="cm">// ?. — access آمن على nullable</span>
<span class="kw">int?</span> length = nickname?.length;

<span class="cm">// ! — أنا متأكد إنه مش null</span>
<span class="kw">String</span> sure = nickname!;

<span class="cm">// late — سأكمل القيمة بعدين</span>
<span class="kw">late String</span> userName;
userName = <span class="st">'Ali'</span>;</pre></div>
<div class="warn">⚠️ استخدم ! بحذر جداً — لو المتغير كان null فعلاً الـ app هيتكرش.</div>`,

5: `<div class="intro">في Flutter، <strong>كل حاجة بتشوفها على الشاشة هي Widget</strong>.</div>
<div class="tip">🧱 فكّر في الـ Widgets كـ LEGO — كل قطعة صغيرة مستقلة، وبتجمعهم مع بعض.</div>
<div class="grid2">
<div class="card"><div class="card-icon">🎨</div><div class="card-title">UI Widgets</div><div class="card-body">بتعرض حاجة على الشاشة. أمثلة: Text, Image, Icon, Card</div></div>
<div class="card"><div class="card-icon">📐</div><div class="card-title">Layout Widgets</div><div class="card-body">بترتب الـ Widgets جوه بعض. أمثلة: Column, Row, Container, Stack</div></div>
<div class="card" style="grid-column:span 2"><div class="card-icon">🖱️</div><div class="card-title">Interactive Widgets</div><div class="card-body">بتتفاعل مع المستخدم. أمثلة: ElevatedButton, TextField, GestureDetector, Switch</div></div>
</div>
<div class="cb"><div class="cb-label">FLUTTER — widget tree</div><pre><span class="cl">Scaffold</span>(
  body: <span class="cl">Center</span>(
    child: <span class="cl">Column</span>(
      children: [
        <span class="cl">Text</span>(<span class="st">'Hello!'</span>),
        <span class="cl">ElevatedButton</span>(
          onPressed: () {},
          child: <span class="cl">Text</span>(<span class="st">'اضغط'</span>),
        ),
      ],
    ),
  ),
)</pre></div>`,

6: `<div class="intro">لما بتعمل Flutter project جديد، هتلاقي <strong>ملف main.dart</strong> — نقطة البداية لأي تطبيق Flutter.</div>
<div class="cb"><div class="cb-label">lib/main.dart</div><pre><span class="kw">import</span> <span class="st">'package:flutter/material.dart'</span>;

<span class="kw">void</span> main() {
  runApp(<span class="cl">MyApp</span>());
}

<span class="kw">class</span> <span class="cl">MyApp</span> <span class="kw">extends</span> <span class="cl">StatelessWidget</span> {
  <span class="nm">@override</span>
  <span class="cl">Widget</span> build(<span class="cl">BuildContext</span> context) {
    <span class="kw">return</span> <span class="cl">MaterialApp</span>(
      title: <span class="st">'My App'</span>,
      home: <span class="cl">HomeScreen</span>(),
    );
  }
}</pre></div>
<div class="grid2">
<div class="card"><div class="card-title">🚀 runApp()</div><div class="card-body" style="margin-top:6px">أول دالة بتتشغل. بتاخد الـ Widget الرئيسي.</div></div>
<div class="card"><div class="card-title">📦 MaterialApp</div><div class="card-body" style="margin-top:6px">بيضيف Material Design + navigation + themes.</div></div>
<div class="card" style="grid-column:span 2"><div class="card-title">🏗️ Scaffold</div><div class="card-body" style="margin-top:6px">هيكل الصفحة الأساسي — AppBar وbody وFAB.</div></div>
</div>`,

7: `<div class="intro">دلوقتي هنبني الـ UI بجد. هتتعلم أهم الـ Widgets مع <strong>Scaffold بالتفصيل</strong>.</div>
<div class="sh2">Scaffold — الهيكل الأساسي</div>
<div class="cb"><div class="cb-label">FLUTTER — Scaffold</div><pre><span class="cl">Scaffold</span>(
  appBar: <span class="cl">AppBar</span>(
    title: <span class="cl">Text</span>(<span class="st">'عنوان الصفحة'</span>),
    centerTitle: <span class="kw">true</span>,
  ),
  body: <span class="cl">Center</span>(child: <span class="cl">Text</span>(<span class="st">'المحتوى هنا'</span>)),
  floatingActionButton: <span class="cl">FloatingActionButton</span>(
    onPressed: () {},
    child: <span class="cl">Icon</span>(<span class="cl">Icons</span>.add),
  ),
)</pre></div>
<div class="sh2">Container مع Decoration</div>
<div class="cb"><div class="cb-label">FLUTTER — Container</div><pre><span class="cl">Container</span>(
  width: <span class="nm">200</span>, height: <span class="nm">100</span>,
  margin: <span class="cl">EdgeInsets</span>.all(<span class="nm">16</span>),
  padding: <span class="cl">EdgeInsets</span>.symmetric(horizontal: <span class="nm">20</span>, vertical: <span class="nm">10</span>),
  decoration: <span class="cl">BoxDecoration</span>(
    color: <span class="cl">Colors</span>.blue,
    borderRadius: <span class="cl">BorderRadius</span>.circular(<span class="nm">16</span>),
  ),
  child: <span class="cl">Text</span>(<span class="st">'جوه الكونتينر'</span>),
)</pre></div>
<div class="err">❌ Duplicate color error: لو حطيت color في Container وفي decoration في نفس الوقت هيجيب error. الحل: استخدم decoration.color بس، أو color بس.</div>
<div class="sh2">Column / Row</div>
<div class="cb"><div class="cb-label">FLUTTER — layout widgets</div><pre><span class="cl">Column</span>(
  mainAxisAlignment: <span class="cl">MainAxisAlignment</span>.center,
  children: [
    <span class="cl">Text</span>(<span class="st">'الأول'</span>),
    <span class="cl">Row</span>(
      children: [
        <span class="cl">Icon</span>(<span class="cl">Icons</span>.home),
        <span class="cl">Icon</span>(<span class="cl">Icons</span>.search),
      ],
    ),
  ],
)</pre></div>`,

8: `<div class="intro">أول مشروع حقيقي! هنبني Counter App وهنفهم من خلالها <strong>State</strong>.</div>
<div class="grid2">
<div class="card"><div class="card-icon">🪨</div><div class="card-title">StatelessWidget</div><div class="card-body">ثابت — مش بيتغير.</div></div>
<div class="card"><div class="card-icon">🔄</div><div class="card-title">StatefulWidget</div><div class="card-body">ديناميكي — بيتغير لما البيانات تتغير.</div></div>
</div>
<div class="cb"><div class="cb-label">✅ Counter App</div><pre><span class="kw">class</span> <span class="cl">CounterScreen</span> <span class="kw">extends</span> <span class="cl">StatefulWidget</span> {
  <span class="nm">@override</span>
  <span class="cl">_CounterScreenState</span> createState() =&gt; <span class="cl">_CounterScreenState</span>();
}

<span class="kw">class</span> <span class="cl">_CounterScreenState</span> <span class="kw">extends</span> <span class="cl">State</span>&lt;<span class="cl">CounterScreen</span>&gt; {
  <span class="kw">int</span> _counter = <span class="nm">0</span>;

  <span class="kw">void</span> <span class="fn">_increment</span>() {
    setState(() { _counter++; });
  }

  <span class="nm">@override</span>
  <span class="cl">Widget</span> build(<span class="cl">BuildContext</span> context) {
    <span class="kw">return</span> <span class="cl">Scaffold</span>(
      appBar: <span class="cl">AppBar</span>(title: <span class="cl">Text</span>(<span class="st">'Counter'</span>)),
      body: <span class="cl">Center</span>(child: <span class="cl">Text</span>(<span class="st">'\${_counter}'</span>)),
      floatingActionButton: <span class="cl">FloatingActionButton</span>(
        onPressed: _increment,
        child: <span class="cl">Icon</span>(<span class="cl">Icons</span>.add),
      ),
    );
  }
}</pre></div>
<div class="tip">💡 setState() بتقول لـ Flutter "في حاجة اتغيرت، ارسم الشاشة تاني!"</div>`,

9: `<div class="intro">دلوقتي هنتعلم Widgets أكثر تقدماً.</div>
<div class="sh2">Image</div>
<div class="cb"><div class="cb-label">FLUTTER — Image</div><pre><span class="cl">Image</span>.asset(<span class="st">'assets/logo.png'</span>)
<span class="cl">Image</span>.network(<span class="st">'https://example.com/photo.jpg'</span>, fit: <span class="cl">BoxFit</span>.cover)</pre></div>
<div class="sh2">Navigator</div>
<div class="cb"><div class="cb-label">FLUTTER — Navigation</div><pre><span class="cl">Navigator</span>.push(
  context,
  <span class="cl">MaterialPageRoute</span>(builder: (context) =&gt; <span class="cl">SecondScreen</span>()),
);

<span class="cl">Navigator</span>.pop(context);
<span class="cl">Navigator</span>.pushReplacement(context, <span class="cl">MaterialPageRoute</span>(builder: (_) =&gt; <span class="cl">HomeScreen</span>()));</pre></div>
<div class="sh2">ListView</div>
<div class="cb"><div class="cb-label">FLUTTER — ListView.builder</div><pre><span class="cl">ListView</span>.builder(
  itemCount: items.length,
  itemBuilder: (context, index) {
    <span class="kw">return</span> <span class="cl">ListTile</span>(
      title: <span class="cl">Text</span>(items[index]),
    );
  },
)</pre></div>
<div class="sh2">Stack &amp; PageView</div>
<div class="cb"><div class="cb-label">FLUTTER — Stack</div><pre><span class="cl">Stack</span>(
  children: [
    <span class="cl">Image</span>.network(<span class="st">'...'</span>),
    <span class="cl">Positioned</span>(
      bottom: <span class="nm">10</span>, right: <span class="nm">10</span>,
      child: <span class="cl">Text</span>(<span class="st">'نص فوق الصورة'</span>),
    ),
  ],
)</pre></div>`,

10: `<div class="intro">بعد ما تقفل التطبيق، البيانات بتتمسح. <strong>Storage</strong> بيخلي البيانات تفضل محفوظة.</div>
<div class="sh2">SharedPreferences</div>
<div class="cb"><div class="cb-label">DART — SharedPreferences</div><pre><span class="kw">import</span> <span class="st">'package:shared_preferences/shared_preferences.dart'</span>;

<span class="kw">Future</span>&lt;<span class="kw">void</span>&gt; <span class="fn">saveData</span>() <span class="kw">async</span> {
  <span class="kw">final</span> prefs = <span class="kw">await</span> <span class="cl">SharedPreferences</span>.getInstance();
  <span class="kw">await</span> prefs.setString(<span class="st">'name'</span>, <span class="st">'Ahmed'</span>);
  <span class="kw">await</span> prefs.setInt(<span class="st">'age'</span>, <span class="nm">25</span>);
  <span class="kw">await</span> prefs.setBool(<span class="st">'isDarkMode'</span>, <span class="kw">true</span>);
}

<span class="kw">Future</span>&lt;<span class="kw">void</span>&gt; <span class="fn">readData</span>() <span class="kw">async</span> {
  <span class="kw">final</span> prefs = <span class="kw">await</span> <span class="cl">SharedPreferences</span>.getInstance();
  <span class="kw">String?</span> name = prefs.getString(<span class="st">'name'</span>);
}</pre></div>
<div class="sh2">Hive — قاعدة بيانات محلية</div>
<div class="cb"><div class="cb-label">DART — Hive</div><pre><span class="kw">await</span> <span class="cl">Hive</span>.initFlutter();
<span class="kw">var</span> box = <span class="kw">await</span> <span class="cl">Hive</span>.openBox(<span class="st">'myBox'</span>);

box.put(<span class="st">'name'</span>, <span class="st">'Ahmed'</span>);
<span class="kw">String</span> name = box.get(<span class="st">'name'</span>);
box.delete(<span class="st">'name'</span>);</pre></div>`,

11: `<div class="intro"><strong>Packages</strong> هي مكتبات جاهزة بتوفرلك وقت كبير.</div>
<div class="tip">🌐 pub.dev هو الموقع الرسمي لكل packages الـ Flutter والـ Dart.</div>
<div class="cb"><div class="cb-label">pubspec.yaml</div><pre><span class="kw">dependencies</span>:
  flutter:
    sdk: flutter
  http: ^1.1.0
  shared_preferences: ^2.2.0
  provider: ^6.1.1
  cached_network_image: ^3.3.0</pre></div>
<div class="cb"><div class="cb-label">TERMINAL</div><pre>flutter pub get
flutter pub add http</pre></div>
<div class="grid2">
<div class="card"><div class="card-title">🌐 http / dio</div><div class="card-body" style="margin-top:4px">للتواصل مع الـ APIs.</div></div>
<div class="card"><div class="card-title">📦 provider</div><div class="card-body" style="margin-top:4px">لإدارة الـ State.</div></div>
<div class="card"><div class="card-title">🖼️ cached_network_image</div><div class="card-body" style="margin-top:4px">لتحميل وتخزين الصور.</div></div>
<div class="card"><div class="card-title">📅 intl</div><div class="card-body" style="margin-top:4px">للتواريخ والترجمة.</div></div>
</div>`,

12: `<div class="intro"><strong>State Management</strong> بييجي لما setState() مش كفاية. <strong>Provider</strong> هو الحل الموصى بيه.</div>
<div class="cb"><div class="cb-label">DART — ChangeNotifier</div><pre><span class="kw">class</span> <span class="cl">CounterProvider</span> <span class="kw">extends</span> <span class="cl">ChangeNotifier</span> {
  <span class="kw">int</span> _count = <span class="nm">0</span>;
  <span class="kw">int get</span> count =&gt; _count;

  <span class="kw">void</span> <span class="fn">increment</span>() {
    _count++;
    notifyListeners();
  }
}</pre></div>
<div class="cb"><div class="cb-label">DART — main.dart</div><pre><span class="kw">void</span> main() {
  runApp(
    <span class="cl">ChangeNotifierProvider</span>(
      create: (context) =&gt; <span class="cl">CounterProvider</span>(),
      child: <span class="cl">MyApp</span>(),
    ),
  );
}</pre></div>
<div class="cb"><div class="cb-label">DART — استخدام</div><pre><span class="kw">final</span> counter = context.watch&lt;<span class="cl">CounterProvider</span>&gt;();
<span class="cl">Text</span>(<span class="st">'\${counter.count}'</span>)

context.read&lt;<span class="cl">CounterProvider</span>&gt;().increment();</pre></div>
<div class="tip">💡 watch = بيسمع التغييرات. read = بيقرأ مرة واحدة بس.</div>`,

13: `<div class="intro">المشروع ده هيجمع <strong>كل اللي اتعلمناه</strong> في تطبيق Todo App متكامل.</div>
<div class="grid2">
<div class="card"><div class="card-icon">📋</div><div class="card-title">الصفحات</div><div class="card-body">Home, Add Task, Settings</div></div>
<div class="card"><div class="card-icon">💾</div><div class="card-title">Storage</div><div class="card-body">حفظ الـ Tasks بـ Hive</div></div>
<div class="card"><div class="card-icon">🔄</div><div class="card-title">State</div><div class="card-body">Provider لإدارة القائمة</div></div>
<div class="card"><div class="card-icon">🎨</div><div class="card-title">UI</div><div class="card-body">ListView, Form, Navigator</div></div>
</div>
<div class="cb"><div class="cb-label">PROJECT STRUCTURE</div><pre>lib/
├── main.dart
├── models/task.dart
├── providers/task_provider.dart
├── screens/
│   ├── home_screen.dart
│   └── add_task_screen.dart
└── widgets/task_tile.dart</pre></div>`,

14: `<div class="intro"><strong>Async</strong> هي التعامل مع العمليات اللي بتاخد وقت زي: جلب بيانات من النت.</div>
<div class="cb"><div class="cb-label">DART — Future</div><pre><span class="cl">Future</span>&lt;<span class="kw">String</span>&gt; <span class="fn">fetchName</span>() {
  <span class="kw">return</span> <span class="cl">Future</span>.delayed(
    <span class="cl">Duration</span>(seconds: <span class="nm">2</span>),
    () =&gt; <span class="st">'Ahmed'</span>,
  );
}</pre></div>
<div class="cb"><div class="cb-label">DART — async &amp; await</div><pre><span class="kw">Future</span>&lt;<span class="kw">void</span>&gt; <span class="fn">loadData</span>() <span class="kw">async</span> {
  <span class="kw">String</span> name = <span class="kw">await</span> fetchName();
  print(<span class="st">'الاسم: \${name}'</span>);
}</pre></div>
<div class="cb"><div class="cb-label">DART — try/catch</div><pre><span class="kw">try</span> {
  <span class="kw">final</span> data = <span class="kw">await</span> someApiCall();
} <span class="kw">catch</span> (e) {
  print(<span class="st">'حصل خطأ: \${e}'</span>);
}</pre></div>`,

15: `<div class="intro"><strong>REST APIs</strong> هي الطريقة اللي التطبيق بيتكلم بيها مع الـ Server.</div>
<div class="grid2">
<div class="card"><div class="card-title">GET</div><div class="card-body" style="margin-top:4px">جلب بيانات.</div></div>
<div class="card"><div class="card-title">POST</div><div class="card-body" style="margin-top:4px">إرسال بيانات جديدة.</div></div>
<div class="card"><div class="card-title">PUT / PATCH</div><div class="card-body" style="margin-top:4px">تحديث.</div></div>
<div class="card"><div class="card-title">DELETE</div><div class="card-body" style="margin-top:4px">حذف.</div></div>
</div>
<div class="cb"><div class="cb-label">DART — GET request</div><pre><span class="kw">import</span> <span class="st">'package:http/http.dart'</span> <span class="kw">as</span> http;
<span class="kw">import</span> <span class="st">'dart:convert'</span>;

<span class="kw">Future</span>&lt;<span class="kw">void</span>&gt; <span class="fn">fetchPosts</span>() <span class="kw">async</span> {
  <span class="kw">final</span> url = <span class="cl">Uri</span>.parse(<span class="st">'https://jsonplaceholder.typicode.com/posts'</span>);
  <span class="kw">final</span> response = <span class="kw">await</span> http.get(url);

  <span class="kw">if</span> (response.statusCode == <span class="nm">200</span>) {
    <span class="kw">List</span> data = jsonDecode(response.body);
    print(data[<span class="nm">0</span>][<span class="st">'title'</span>]);
  }
}</pre></div>
<div class="cb"><div class="cb-label">DART — POST request</div><pre><span class="kw">final</span> response = <span class="kw">await</span> http.post(
  url,
  headers: {<span class="st">'Content-Type'</span>: <span class="st">'application/json'</span>},
  body: jsonEncode({<span class="st">'title'</span>: <span class="st">'New Post'</span>}),
);</pre></div>`,

16: `<div class="intro"><strong>Firebase</strong> هو Backend جاهز من Google. هنركز هنا على الـ Authentication.</div>
<div class="cb"><div class="cb-label">TERMINAL — Setup</div><pre>npm install -g firebase-tools
firebase login
dart pub global activate flutterfire_cli
flutterfire configure</pre></div>
<div class="cb"><div class="cb-label">pubspec.yaml</div><pre>firebase_core: ^2.24.0
firebase_auth: ^4.15.0</pre></div>
<div class="sh2">Authentication</div>
<div class="cb"><div class="cb-label">DART — Email &amp; Password Auth</div><pre><span class="kw">import</span> <span class="st">'package:firebase_auth/firebase_auth.dart'</span>;

<span class="kw">final</span> _auth = <span class="cl">FirebaseAuth</span>.instance;

<span class="cm">// تسجيل</span>
<span class="kw">await</span> _auth.createUserWithEmailAndPassword(
  email: email, password: password,
);

<span class="cm">// تسجيل دخول</span>
<span class="kw">await</span> _auth.signInWithEmailAndPassword(
  email: email, password: password,
);

<span class="cm">// خروج</span>
<span class="kw">await</span> _auth.signOut();

<span class="cm">// المستخدم الحالي</span>
<span class="cl">User?</span> user = _auth.currentUser;</pre></div>`,

17: `<div class="intro">وصلت للنهاية! دلوقتي جه وقت تطبق كل اللي اتعلمته في مشاريع حقيقية.</div>
<div class="grid1">
<div class="card"><div class="card-icon">🛒</div><div class="card-title">E-Commerce App</div><div class="card-body" style="margin-top:4px">تطبيق تسوق كامل.</div></div>
<div class="card"><div class="card-icon">💬</div><div class="card-title">Chat App</div><div class="card-body" style="margin-top:4px">تطبيق محادثة بـ Firebase.</div></div>
<div class="card"><div class="card-icon">📰</div><div class="card-title">News App</div><div class="card-body" style="margin-top:4px">تطبيق أخبار بـ REST API.</div></div>
<div class="card" style="border-color:rgba(80,200,120,0.4)"><div class="card-icon">🎓</div><div class="card-title">Graduation App</div><div class="card-body" style="margin-top:4px">مشروعك الشخصي الكامل — بيجمع كل اللي اتعلمته.</div></div>
</div>
<div class="tip">🎉 مبروك! لو وصلت للنهاية، بقيت Flutter Developer حقيقي.</div>`

};
