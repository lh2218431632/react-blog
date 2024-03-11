import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function DragItemComponent(props) {
  const { items } = props;
  const {
    items: { task },
  } = props;
  function handleDragEnd(result) {
    console.log(result);
  }
  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId={items.droppable}>
          {(provider, snapshot) => {
            return (
              <div ref={provider.innerRef} {...provider.droppableProps}>
                {task.map((item, index) => {
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
                              ...provider.draggableProps.style,
                              backgroundColor: snapshot.isDragging
                                ? "#263B4A"
                                : "#456C86",
                              color: "white",
                              padding: 16,
                              margin: "0 8px 0 0",
                              minHeight: "50px",
                              userSelect: "none",
                            }}
                          >
                            <h1>{item.content}</h1>
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
    </>
  );
}

export default DragItemComponent;
