import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../contexts/auth';
import { PostFeedback } from '../../contexts/utils';

export default function CommentForm({ idPacote }) {
    const auth = useContext(AuthContext);
    const [stars, setRating] = useState();
    const [description, setComment] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

    const [user, setUser] = useState({});
    const [DoComment, setDoComment] = useState(null);

    useEffect(() => {
        const checkAdminStatus = async () => {
          try {
            const user = await auth.UserInfo(auth.token, auth.id);
            // const DoComment = await auth.doFeedback(auth.id, idPacote);
            setUser(user);
            // setDoComment(DoComment);
            // setFeedbackSubmitted(DoComment);
            
            console.log('USUARIO:',user);
          } catch (error) {
            setUser(null);
            console.error('Erro ao verificar se o usuário é administrador:', error);
          }
        };
    
        checkAdminStatus();
    }, [auth, idPacote]);

    const handleRatingChange = newRating => {
        console.log('Nova avaliação:', newRating);
        setRating(newRating.nativeEvent.data);
      };
    
      const handleCommentChange = event => {
        console.log('Novo comentário:', event.target.value);
        setComment(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          console.log('FeedBackForm está sendo executado.');
          setIsLoading(true);
    
          const response = await PostFeedback(
            auth.id,
            idPacote,
            user.nome,
            stars,
            description
          ); 
          // Verifica se a requisição foi bem-sucedida
          if (response.ok) {
            console.log('Feedback enviado com sucesso!');
            setFeedbackSubmitted(true);
            // Você pode querer adicionar lógica adicional após o envio bem-sucedido
          } else {
            // Trate erros aqui, por exemplo, exibindo uma mensagem de erro ao usuário
            console.error('Erro ao enviar feedback:', response.statusText);
          }
          window.location.reload();
        } catch (error) {
          console.error('Erro ao enviar feedback:', error);
        } finally {
          setIsLoading(false);
        }
    };

    return (
        <div class="flex items-center justify-center mt-16 mb-4 mx-8 w-[1024px] shadow-md border border-gray-200 rounded-lg dark:border-gray-800">
            <form class="w-full bg-gray-100 dark:bg-gray-800 rounded-lg px-4 pt-2 shadow-md">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <h2 class="font-bold px-4 pt-3 pb-2 text-gray-800 dark:text-gray-200 text-lg font-mono">Add a new comment</h2>
                    <div class="w-full px-3 mb-2 mt-2">
                        <textarea class="bg-gray-200 dark:bg-gray-700 rounded border border-gray-400 dark:border-gray-600 leading-normal resize-none w-full h-20 py-2 px-3 placeholder-gray-700 font-mono placeholder:font-mono dark:placeholder-gray-100 dark:text-gray-100 focus:outline-none focus:bg-white" name="comment" value={description}
          onChange={handleCommentChange} placeholder='Type Your Comment'></textarea>
                    </div>
                    <div class="w-full flex items-start px-3">
                        <div class="flex items-start w-1/2 text-gray-700 mr-auto">
                            <div class="text-xs pt-px">
                               <input class="bg-gray-200 dark:bg-gray-700 rounded border border-gray-400 dark:border-gray-600 leading-normal resize-none w-full h-10 py-2 px-3 font-sans placeholder:font-mono placeholder-gray-700 dark:placeholder-gray-100 dark:text-gray-100 focus:outline-none focus:bg-white overflow-hidden" type="number" name="rating" onChange={handleRatingChange} placeholder='Rating'/>
                            </div>
                        </div>
                        <div class="-mr-1">
                            <button type='submit' class="bg-transparen font-sans py-1 px-4 border rounded-lg tracking-wide mr-1 text-blue-500 border-blue-500 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300 h-10" onClick={handleSubmit} disabled={feedbackSubmitted} isLoading={isLoading}>Post Comment</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}