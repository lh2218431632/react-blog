import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { getItem } from "../../data/jiraSoftware";
import { useEffect, useState } from "react";
import DragItemComponent from "../DragItemComponent";

function NewDragComponent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getItem().then((res) => {
      setData(res);
    });
  }, []);
  function handleDragEnd(result) {
    console.log(result);
  }
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provider, snapshot) => {
            return (
              <div
                ref={provider.innerRef}
                {...provider.droppableProps}
                style={{
                  display: "flex",
                  background: snapshot.isDraggingOver
                    ? "lightblue"
                    : "lightgrey",
                  padding: 8,
                  overflow: "auto",
                }}
              >
                {data.map((item, index) => {
                  return (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provider, snapshot) => {
                        return (
                          <div
                            ref={provider.innerRef}
                            {...provider.draggableProps}
                            {...provider.dragHandleProps}
                            style={{
                              width: "200px",
                              userSelect: "none",
                              padding: 16,
                              margin: "0 8px 0 0",
                              minHeight: "50px",
                              backgroundColor: snapshot.isDragging
                                ? "#263B4A"
                                : "#456C86",
                              color: "white",
                              ...provider.draggableProps.style,
                            }}
                          >
                            <h1>{item.id}</h1>
                            <DragItemComponent items={item} />
                          </div>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {provider.placeholder}
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default NewDragComponent;
