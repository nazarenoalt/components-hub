import { useState } from "react"
import Button from "../components/Button"
import Modal from "../components/Modal"

const ModalPage = () => {
  const [isModalOpen, setIsModalopen] = useState(false);
  const handleClick = () => {
    setIsModalopen(!isModalOpen);
  }

  return (
    <div>
      <Button type="warn" onClick={handleClick}>Open modal</Button>
      {isModalOpen && (
        <Modal onClick={handleClick}>
          <h2 className="text-[40px] font-semibold pb-4 ">Oops!</h2>
          <div className="pb-4">{text}</div>
          <Button onClick={handleClick}>Understood</Button>
        </Modal>
        )}

        {text}
        {text}
        {text}
    </div>
  )
}

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales consequat eros, et tempor turpis feugiat quis. Maecenas cursus, massa sit amet molestie iaculis, neque eros venenatis felis, sit amet iaculis ipsum ante quis velit. Sed sit amet est convallis, hendrerit purus id, interdum libero. Vivamus tempor justo tellus, et convallis nibh tempor faucibus. Nam magna lorem, gravida sed erat quis, dictum fermentum leo. Nullam aliquet dolor quis mauris gravida, et fringilla odio dignissim. Sed aliquam nisi sit amet risus dictum, et ultricies magna tempus. Suspendisse eu odio a magna mollis interdum. Morbi volutpat congue augue semper gravida. Vestibulum fermentum, purus sit amet facilisis elementum, lacus ante varius nunc, sit amet convallis sapien sem ac justo. Mauris porttitor, erat in venenatis posuere, urna neque porta nisl, vitae scelerisque tellus lacus vel mi.

Praesent placerat nulla vitae libero mattis, et rutrum lorem luctus. Suspendisse sollicitudin aliquam imperdiet. Ut consectetur elementum rhoncus. Quisque interdum ligula et quam pharetra hendrerit. Sed imperdiet lorem eget bibendum aliquet. Cras accumsan neque quis cursus facilisis. Suspendisse elementum a tortor quis placerat. Nullam laoreet, massa at tempus mattis, neque tortor cursus diam, non sollicitudin urna felis eu enim. Quisque placerat maximus nisi vel accumsan. Sed sed gravida diam. Pellentesque purus odio, molestie nec pretium sit amet, mattis at nibh. Etiam vel congue sem.

Aliquam libero lacus, molestie in dui mollis, rutrum suscipit felis. Nam auctor justo non lectus tincidunt, vitae maximus quam placerat. Proin ac tincidunt urna, vel tincidunt eros. Pellentesque ultrices eros non fermentum tincidunt. Integer pulvinar maximus felis, sit amet congue eros. Donec augue massa, vehicula sit amet quam ut, volutpat finibus nulla. Quisque vitae metus sapien. Praesent ipsum risus, maximus a porta non, hendrerit ut felis. Nulla nisl neque, viverra eu laoreet feugiat, mollis vitae enim. Nulla facilisi. Nulla in neque risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur efficitur, justo eu accumsan rhoncus, nisi ante varius orci, a pretium ante mi ut magna. Praesent at sapien et leo mattis consequat eu ac diam. Aenean sagittis arcu eget faucibus sagittis.

Sed et turpis rutrum, finibus eros quis, feugiat nulla. In scelerisque augue dui, sit amet ultrices est sagittis sed. Mauris congue consequat vulputate. Nulla maximus, nunc placerat mattis efficitur, dolor quam dignissim ipsum, in lacinia mi nunc nec metus. Donec quis volutpat turpis, eget malesuada nunc. Vivamus facilisis fringilla lobortis. Praesent commodo quam sit amet ligula porttitor finibus. Aliquam id turpis ac felis pretium posuere. Nam arcu purus, lacinia non condimentum at, molestie ut elit. Pellentesque laoreet blandit purus, eu gravida ligula finibus sit amet. Quisque faucibus urna felis, ut blandit ante mollis et. Mauris mollis pulvinar suscipit. Etiam non nunc vel mi mattis tincidunt nec eu tellus. Sed sodales accumsan tellus, id consectetur augue posuere at. Etiam ut vehicula urna.

Ut pulvinar scelerisque sem eget varius. Quisque urna magna, euismod nec auctor a, interdum at leo. Sed viverra elementum lorem in lobortis. Etiam elit est, malesuada et ante vel, laoreet bibendum justo. Quisque quis nulla turpis. Praesent vehicula non sapien ac accumsan. Maecenas ac turpis accumsan, blandit ex in, varius libero. Nunc sit amet molestie turpis. Cras at maximus nulla. Quisque vulputate augue at elit dignissim volutpat. Aenean et venenatis neque. Nunc eu nibh fermentum, egestas eros nec, malesuada nisi.

Etiam fermentum enim vitae ex porta, elementum cursus mi elementum. Cras convallis tempor mauris, at molestie felis placerat mattis. Nam ac tincidunt diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sit amet varius sem. Cras vel massa non velit scelerisque gravida. Aliquam erat volutpat. Suspendisse semper sem vitae nunc bibendum, eget venenatis enim blandit. Nunc pellentesque mollis arcu a vulputate. Etiam non velit felis. Mauris placerat diam tristique pretium malesuada. Quisque et dolor dui.

Morbi blandit condimentum ipsum, eget pretium nisl vehicula ut. Nam et fringilla leo, eu porttitor elit. Cras scelerisque mattis lectus, vitae viverra mauris eleifend non. Suspendisse consequat mauris libero, ac sagittis turpis luctus ac. Proin blandit interdum ligula, eu sollicitudin orci gravida non. Quisque sed ligula nec nibh feugiat ullamcorper. Maecenas lobortis in diam non sagittis. Aenean eu risus nec odio pellentesque vulputate. Cras lobortis nibh ac leo consequat, a porta leo imperdiet. Mauris quis varius lorem. Mauris id metus non nisl viverra viverra. Etiam quis nibh non eros consectetur bibendum a nec erat. Vestibulum quis metus rutrum, egestas nulla in, lobortis odio. Maecenas ut turpis et quam auctor interdum non at arcu.

In sodales ligula id eros eleifend, at accumsan dolor interdum. Vestibulum congue id erat non pulvinar. Praesent tristique scelerisque ornare. Quisque et velit quis nunc commodo facilisis et a tortor. Vestibulum fringilla arcu id sem eleifend, eu vulputate libero accumsan. Sed malesuada, turpis a tincidunt consequat, nunc ante dapibus orci, et facilisis libero velit at tellus. Pellentesque quis diam sed purus ultricies aliquam hendrerit vel turpis. Pellentesque id libero a tellus tincidunt porttitor. Donec ultricies fermentum metus. Vivamus eu neque non lacus efficitur lacinia. Nam eget mi et arcu mollis consectetur.

Proin et porta justo, eget tincidunt tortor. Nam ultricies turpis vel volutpat lacinia. Pellentesque sed metus ut est lacinia laoreet. Nullam malesuada vitae ex ac iaculis. Maecenas faucibus sodales tellus. In suscipit rhoncus erat, a sagittis sapien porttitor ut. Sed porttitor egestas erat, non egestas ligula egestas a.

In id rutrum libero. Sed aliquam congue nisl sed aliquet. Cras molestie aliquet sapien, vel imperdiet neque sodales ut. Suspendisse ornare risus viverra lacus finibus convallis. Ut eu posuere tellus, sed cursus tellus. Donec pellentesque leo sit amet lectus congue semper. Praesent placerat venenatis suscipit. Pellentesque imperdiet lacus purus, nec condimentum est sollicitudin tincidunt. Suspendisse potenti. Maecenas iaculis faucibus mollis. Duis bibendum leo quis augue efficitur euismod. Nam feugiat cursus diam, ut vulputate nulla. Vestibulum fermentum dictum venenatis. Donec a ex non dui efficitur ultrices.`
export default ModalPage