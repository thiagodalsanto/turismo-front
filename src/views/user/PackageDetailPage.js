import PackageDetail from "../../components/package/PackageDetail";
import CommentForm from "../../components/comment/CommentForm";
import PostedComments from "../../components/comment/PostedComments";
import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/auth';
import { useParams } from 'react-router-dom';

export default function PackageDetailPage() {
    let { id } = useParams();
    const auth = useContext(AuthContext);
    const [feedbacks, setFeedbacks] = useState([]);
  
    useEffect(() => {
      const loadData = async () => {
        try {
          const response = await auth.feedbacksTour(id);
          setFeedbacks(response.data);
          console.log(response.data);
        } catch (error) {
          setFeedbacks([]); // Set to an empty array to avoid 'undefined' in the map
          console.error('Erro ao carregar feedbacks:', error);
        }
      };
  
      loadData();
    }, []);

    const calcularMediaEstrelas = () => {
        if (feedbacks.length === 0) {
          return 0; // Se não houver feedbacks, a média é 0
        }
    
        const totalEstrelas = feedbacks.reduce(
          (acc, feedback) => acc + feedback.stars,
          0
        );
        const media = totalEstrelas / feedbacks.length;
        return media;
    };

    return (
        <>
            <section className="pt-10 bg-stone-200 dark:bg-gray-900 h-max w-screen flex items-center flex-col">
                <PackageDetail 
                    id={id}
                    nota={calcularMediaEstrelas().toFixed(2)}
                />
                <CommentForm 
                    idPacote={id}
                />
                <PostedComments 
                    nameFirstLetter={Array.from('Jackson Sieben')[0]} 
                    whoComment={"Jackson Sieben"} 
                    rating={"5.0"} 
                    comment={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pellentesque metus in erat bibendum rutrum. Quisque in elementum quam. Curabitur faucibus mauris sit amet lectus scelerisque pretium. Donec dignissim lorem venenatis erat finibus, vitae commodo odio consectetur. Aliquam eu massa tortor. Nulla facilisi. Quisque vel pharetra lacus. Quisque lacinia sem a nibh mollis tempor. Donec ullamcorper pharetra posuere. Donec nec dui gravida, vestibulum dolor eu, pharetra leo. Morbi lobortis vehicula erat. Quisque sit amet lectus mollis, rhoncus lacus id, commodo erat. Quisque tristique, augue vel rhoncus viverra, ipsum augue feugiat enim, nec pretium ante nisi et augue. Nullam at nunc eu massa lobortis pellentesque."} 
                />
            </section>
        </>
    );
}