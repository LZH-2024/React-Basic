// 项目根组件

function getName() {
  return 'LZH'
}
const message = "Hello World!"

const list = [
  { id: 1001, name: "Vue" },
  { id: 1002, name: "React" },
  { id: 1003, name: "Angular" },
]

const isLogin = false

const articleType = 3 // 0\1\3

function getArticleTemplate() {
  if (articleType === 0) {
    return <div>无图</div>
  } else if (articleType === 1) {
    return <div>单图</div>
  } else {
    return <div>三图</div>
  }
}

const handleClick = (e) => {
  console.log(e)
}

const handleClick2 = (name) => {
  console.log("name", name)
}

const handleClick3 = (name, e) => {
  console.log("name", name)
  console.log("e", e)
}

function App() {
  return (
    <div className="App">
      {/* JSX高频使用场景 */}
      <div>
        {/* 1、使用引号传递字符串 */}
        <div>{'this is a message'}</div>

        {/* 2、识别js变量 */}
        <div>{message}</div>

        {/* 3、函数调用 */}
        <div>{getName()}</div>

        {/* 4、方法调用 */}
        <div>{new Date().getDate()}</div>

        {/* 5、使用JS对象 */}
        <div style={{ color: 'red' }}>this is a div</div>
      </div>

      {/* JSX实现列表渲染 */}
      <div>
        <ul>
          {list.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
      </div>

      {/* JSX实现条件渲染 */}
      <div>
        {isLogin && <div>1已登录</div>}
        {isLogin ? <div>2已登录</div> : <div>2未登录</div>}
      </div>

      {/* JSX实现复杂条件渲染 */}
      <div>
        {getArticleTemplate()}
      </div>

      {/* JSX实现事件绑定 */}
      <div>
        <button onClick={handleClick}>click事件参数</button>
        <button onClick={() => handleClick2("LZH")}>click自定义参数</button>
        <button onClick={(e) => handleClick3("LZH", e)}>click自定义参数+事件</button>
      </div>
    </div>
  );
}

export default App;
